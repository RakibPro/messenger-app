import Image from 'next/image';
import Link from 'next/link';
import LogoutButton from './LogoutButton';
import { getServerSession } from 'next-auth/next';

const Header = async () => {
  const session = await getServerSession();

  if (session) {
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
        <div className="flex space-x-2">
          <Image
            className="rounded-full mx-2"
            height={50}
            width={50}
            src={session.user?.image!}
            alt="Profile Picture"
          />
          <div>
            <p className="text-blue-400">Logged in as:</p>
            <p className="font-bold text-lg">{session.user?.name}</p>
          </div>
        </div>
        <LogoutButton />
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex space-x-2 items-center">
          <Image
            src="https://i.ibb.co/Kx3gsLP/logo-Meta.png"
            height={50}
            width={50}
            alt="Logo"
          />
          <p className="text-blue-400">Welcome To Messenger</p>
        </div>
        <Link
          href="/auth/signin"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;
