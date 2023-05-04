import { Inter } from 'next/font/google';
import ChatInput from './components/ChatInput';
import MessageList from './components/MessageList';
import { Message } from '@/typing';
import { getServerSession } from 'next-auth/next';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export default async function Home() {
  const data = await fetch(
    `${process.env.VERCEL_URL || 'http://localhost:3000/'}/api/getMessages`
  ).then((res) => res.json());
  const messages: Message[] = data.messages;

  const session = await getServerSession();

  return (
    <Providers session={session}>
      <main>
        <MessageList initialMessages={messages} />
        <ChatInput session={session} />
      </main>
    </Providers>
  );
}
