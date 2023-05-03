import { Inter } from 'next/font/google';
import ChatInput from './components/ChatInput';
import MessageList from './components/MessageList';
import { Message } from '@/typing';

const inter = Inter({ subsets: ['latin'] });

export default async function Home() {
  const data = await fetch(`${process.env.VERCEL_URL}/api/getMessages`).then(
    (res) => res.json()
  );

  const messages: Message[] = data.messages;

  console.log(data);
  return (
    <main>
      <MessageList initialMessages={messages} />
      <ChatInput />
    </main>
  );
}
