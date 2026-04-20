import type { NextApiRequest, NextApiResponse } from 'next';
import {
  aboutOutput,
  contactOutput,
  resumeOutput,
  projects,
} from '../../../lib/commandData';

const validCommands = ['about', 'work', 'contact', 'resume', 'help'];

type PreviewSection = {
  heading: string;
  content: string;
  link?: string;
};

type PreviewData = {
  title: string;
  subtitle?: string;
  sections: PreviewSection[];
};

type CommandResponse = {
  status: 'success' | 'error';
  output: string;
  type: 'text' | 'preview' | 'adventure';
  previewData?: PreviewData;
  hint?: string;
};

function levenshtein(a: string, b: string) {
  const matrix = Array.from({ length: b.length + 1 }, () => new Array(a.length + 1).fill(0));
  for (let i = 0; i <= a.length; i += 1) matrix[0][i] = i;
  for (let j = 0; j <= b.length; j += 1) matrix[j][0] = j;

  for (let j = 1; j <= b.length; j += 1) {
    for (let i = 1; i <= a.length; i += 1) {
      const substitutionCost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,
        matrix[j - 1][i] + 1,
        matrix[j - 1][i - 1] + substitutionCost
      );
    }
  }

  return matrix[b.length][a.length];
}

function findClosestCommand(input: string) {
  const candidates = validCommands
    .map((command) => ({ command, distance: levenshtein(input, command) }))
    .sort((a, b) => a.distance - b.distance);

  const best = candidates[0];
  if (!best) return null;
  const secondBest = candidates[1]?.distance ?? Infinity;

  if (best.distance <= 2 && best.distance < secondBest) {
    return best.command;
  }

  return null;
}

const buildProjectPreview = (project: (typeof projects)[number]): PreviewData => ({
  title: project.title,
  subtitle: `${project.company} · ${project.year}`,
  sections: [
    { heading: 'One-liner', content: project.oneLiner },
    { heading: 'Problem', content: project.problem },
    { heading: 'Solution', content: project.solution },
    { heading: 'Outcome', content: project.outcome },
    { heading: 'Skills', content: project.skills },
    project.link ? { heading: 'Link', content: 'Open externally', link: project.link } : { heading: 'Link', content: 'No link available' },
  ],
});

const formatProject = (project: (typeof projects)[number]) => {
  return [
    `${project.title} (${project.year})`,
    `Company: ${project.company}`,
    `One-liner: ${project.oneLiner}`,
    '',
    `Problem: ${project.problem}`,
    `Solution: ${project.solution}`,
    `Outcome: ${project.outcome}`,
    `Skills: ${project.skills}`,
    project.link ? `Link: ${project.link}` : '',
  ]
    .filter(Boolean)
    .join('\n');
};

const getProjectList = () => {
  return projects
    .map((project) => `  [${project.id}] ${project.title} (${project.year})`)
    .join('\n');
};

const handleAbout = async (): Promise<CommandResponse> => ({
  status: 'success',
  type: 'text',
  output: aboutOutput,
});

const handleContact = async (): Promise<CommandResponse> => ({
  status: 'success',
  type: 'text',
  output: contactOutput,
});

const handleResume = async (): Promise<CommandResponse> => ({
  status: 'success',
  type: 'preview',
  output: 'Opening resume preview...',
  previewData: {
    title: 'Resume',
    subtitle: 'Your professional overview and resume link',
    sections: [
      {
        heading: 'Resume',
        content: resumeOutput.replace('RESUME\n\nYour resume is available here:\n  ', ''),
        link: resumeOutput.match(/https?:\/\/\S+/)?.[0] || undefined,
      },
    ],
  },
});

const handleHelp = async (): Promise<CommandResponse> => ({
  status: 'success',
  type: 'text',
  output: `AVAILABLE COMMANDS\n\nhelp      — List available commands\nabout     — Your elevator pitch and skills\nwork      — List your flagship projects\n1-5       — Deep dive into a project\ncontact   — Show contact links\nresume    — Open the resume preview\n\nTry typing a command, or use a project number directly.`,
});

const handleWork = async (args: string[]): Promise<CommandResponse> => {
  const projectId = args?.[0] ? Number(args[0]) : null;
  if (projectId && Number.isInteger(projectId) && projectId >= 1 && projectId <= projects.length) {
    const project = projects.find((item) => item.id === projectId);
    if (!project) {
      return { status: 'error', type: 'text', output: `Project ${projectId} not found.` };
    }
    return {
      status: 'success',
      type: 'preview',
      output: `Opening ${project.title}...`,
      previewData: buildProjectPreview(project),
    };
  }

  const list = getProjectList();
  const output = `PROJECTS\n\n${list}\n\nType \`work 1\` through \`work 5\`, or just type the project number (for example: \`1\`).`;
  return {
    status: 'success',
    type: 'text',
    output,
    hint: 'Try `work 1` to open a project preview.',
  };
};

type CommandHandlers = Record<string, (args: string[]) => Promise<CommandResponse>>;

const commandHandlers: CommandHandlers = {
  about: async () => handleAbout(),
  work: async (args: string[]) => handleWork(args),
  contact: async () => handleContact(),
  resume: async () => handleResume(),
  help: async () => handleHelp(),
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', error: 'Method not allowed' });
  }

  const { command } = req.body;
  if (typeof command !== 'string' || !command.trim()) {
    return res.status(400).json({ status: 'error', error: 'Command is required' });
  }

  const [name, ...args] = command.trim().split(/\s+/);
  const normalized = name.toLowerCase();
  let handlerName = normalized;
  let handlerArgs = args;
  let suggestion = '';

  if (/^[1-9]\d*$/.test(normalized)) {
    handlerName = 'work';
    handlerArgs = [normalized];
  } else if (!commandHandlers[handlerName]) {
    const closest = findClosestCommand(normalized);
    if (closest) {
      suggestion = `Did you mean "${closest}"? Running "${closest}"...`;
      handlerName = closest;
    }
  }

  if (!commandHandlers[handlerName]) {
    return res.status(200).json({ status: 'error', type: 'text', output: `Command not found: ${handlerName}. Type 'help' to see available commands.` });
  }

  const result = await commandHandlers[handlerName](handlerArgs);

  if (handlerName === 'work' && handlerArgs.length === 0 && result.status === 'success') {
    result.output = `${result.output}\n\nTip: type \`work 1\` through \`work 5\` to explore a project in depth.`;
  }

  if (suggestion && result.output) {
    result.output = `${suggestion}\n\n${result.output}`;
  }

  return res.status(200).json(result);
}
