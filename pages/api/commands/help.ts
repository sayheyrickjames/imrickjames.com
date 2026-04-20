import type { NextApiRequest, NextApiResponse } from 'next';

const output = `AVAILABLE COMMANDS

help      — List available commands
about     — Your elevator pitch and skills
work      — List your flagship projects
1-5       — Deep dive into a project
contact   — Show contact links
resume    — Link to your resume

Try typing a command, or use a project number directly.`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', error: 'Method not allowed' });
  }

  return res.status(200).json({ status: 'success', output });
}
