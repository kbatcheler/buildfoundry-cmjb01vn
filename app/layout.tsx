import './globals.css';
import { Inter } from 'next/font/google';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AI Chatbot Integration',
  description: 'Intelligent chatbot for customer service with natural language processing and admin dashboard.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}