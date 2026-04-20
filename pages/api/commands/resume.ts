import type { NextApiRequest, NextApiResponse } from 'next';
import { resumeOutput } from '../../../lib/commandData';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', error: 'Method not allowed' });
  }

  return res.status(200).json({ status: 'success', output: resumeOutput });
}
