import Image from 'next/image';
import Link from 'next/link';
import logoPng from '@/public/logo.png';
import { UserButton } from '@clerk/nextjs';

export function Header(p: {}) {
  return (
    <header className="bg-main-700 p-8 flex justify-between items-center">
      <Link href="/">
        <Image src={logoPng} alt="logo " className="w-48" />
      </Link>
      <UserButton />
    </header>
  );
}
