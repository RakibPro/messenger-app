import { Inter } from 'next/font/google';
import ChatInput from './components/ChatInput';
import MessageList from './components/MessageList';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <MessageList />
      <ChatInput />
    </main>
  );
}
