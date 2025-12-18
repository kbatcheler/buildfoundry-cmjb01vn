import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800 dark:text-gray-100">
          AI Chatbot
        </Link>
        <div className="space-x-4">
          <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:underline">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}