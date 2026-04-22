import type { NextApiRequest, NextApiResponse } from 'next';

type GeoResponse = {
  city: string | null;
  region: string | null;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<GeoResponse>) {
  try {
    const forwarded = req.headers['x-forwarded-for'];
    const ip = typeof forwarded === 'string'
      ? forwarded.split(',')[0].trim()
      : req.socket?.remoteAddress ?? '';

    if (!ip || ip === '::1' || ip.startsWith('127.')) {
      return res.status(200).json({ city: null, region: null });
    }

    const geo = await fetch(`https://ipapi.co/${ip}/json/`, {
      headers: { 'User-Agent': 'imrickjames-portfolio/1.0' },
    });
    const data = await geo.json();

    res.status(200).json({
      city: data.city ?? null,
      region: data.region ?? null,
    });
  } catch {
    res.status(200).json({ city: null, region: null });
  }
}
