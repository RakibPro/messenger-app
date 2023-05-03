'use client';

import { Message } from '@/typing';
import { FormEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';

const ChatInput = () => {
  const [input, setInput] = useState('');

  const addMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;
    const messageToSend = input;
    setInput('');

    const id = uuid();

    const message: Message = {
      id,
      message: messageToSend,
      create_at: Date.now(),
      userName: 'Rakib',
      profilePic:
        'https://wallpapers.com/images/hd/cute-profile-picture-jeik5d6qizh6dxxr.jpg',
      email: 'tryforthis2020@gmail.com',
    };

    const uploadMessageToUpstash = async () => {
      const res = await fetch('/api/addMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
        }),
      });
      const data = await res.json();
      console.log('Message Added', data);
    };
    uploadMessageToUpstash();
  };

  return (
    <form
      onSubmit={addMessage}
      className="flex px-10 py-5 space-x-2 border-t border-gray-100 fixed bottom-0 z-50 w-full bg-white shadow-sm"
    >
      <input
        type="text"
        placeholder="Write Your Message Here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        disabled={!input}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
