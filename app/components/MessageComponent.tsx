import { Message } from '@/typing';

type Props = {
  message: Message;
};

const MessageComponent = ({ message }: Props) => {
  return <div>This is Message Component</div>;
};

export default MessageComponent;
