import Link from 'next/link';
import Button from './Button';
export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 mb-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" passHref>
         <Button> Home</Button>
        </Link>
        <Link href="/create" passHref>
         <Button>Create Post</Button> 
        </Link>
      </nav>
    </header>
  );
}