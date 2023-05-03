'use client';

import { Message } from '@/typing';
import fetcher from '@/utils/fetchMessages';
import useSWR from 'swr';
import MessageComponent from './MessageComponent';

const MessageList = () => {
  const {
    data: messages,
    error,
    mutate,
  } = useSWR<Message[]>('/api/getMessages', fetcher);

  return (
    <div>
      {messages?.map((message) => (
        <MessageComponent key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageList;
