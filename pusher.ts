import Pusher from 'pusher';
import ClientPusher from 'pusher-js';

export const serverPusher = new Pusher({
  appId: process.env.APP_ID!,
  key: process.env.KEY!,
  secret: process.env.SECRET!,
  cluster: process.env.CLUSTER!,
  useTLS: true,
});

export const clientPusher = new ClientPusher('744ca45ea9350b26e2a2', {
  cluster: 'ap2',
  forceTLS: true,
});
