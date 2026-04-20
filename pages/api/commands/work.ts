import type { NextApiRequest, NextApiResponse } from 'next';
import { projects } from '../../../lib/commandData';

const formatProject = (project: typeof projects[number]) => {
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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', error: 'Method not allowed' });
  }

  const { args } = req.body as { args?: string[] };
  const projectId = args?.[0] ? Number(args[0]) : null;

  if (projectId && Number.isInteger(projectId) && projectId >= 1 && projectId <= projects.length) {
    const project = projects.find((item) => item.id === projectId);
    if (!project) {
      return res.status(200).json({ status: 'error', output: `Project ${projectId} not found.` });
    }

    return res.status(200).json({ status: 'success', output: formatProject(project) });
  }

  const list = projects.map((project) => `  [${project.id}] ${project.title} (${project.year})`).join('\n');
  const output = `PROJECTS\n\n${list}\n\nType \`work 1\` through \`work 5\`, or just type the project number (for example: \`1\`).`;

  return res.status(200).json({ status: 'success', output });
}
