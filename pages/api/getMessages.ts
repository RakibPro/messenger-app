import type { NextApiRequest, NextApiResponse } from 'next';
import redis from '../../redis';
import { Message } from '@/typing';

type Data = {
  messages: Message[];
};

type ErrorData = {
  body: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  if (req.method !== 'GET') {
    res.status(405).json({ body: 'Method Not Allowed' });
    return;
  }

  const messageRes = await redis.hvals('messages');
  const messages: Message[] = messageRes
    .map((message) => JSON.parse(message))
    .sort((a, b) => b.create_at - a.create_at);

  res.status(200).json({ messages });
}
