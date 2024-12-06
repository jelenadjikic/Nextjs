import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: "Sophia Lens Photography",
  description: "Explore the world through the lens of Sophia, a passionate photographer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-pink-50 min-h-screen flex flex-col">
        <header className="bg-pink-200 shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-pink-700">Sophia Lens Photography</h1>
            <nav className="space-x-6">
              <Link href="/" className="text-pink-700 font-medium hover:text-pink-900">
                Home
              </Link>
              <Link href="/about" className="text-pink-700 font-medium hover:text-pink-900">
                About
              </Link>
              <Link href="/contact" className="text-pink-700 font-medium hover:text-pink-900">
                Contact
              </Link>
              <Link href="/gallery" className="text-pink-700 font-medium hover:text-pink-900">
                Gallery
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-pink-200 text-center py-4">
          <p className="text-pink-700">Sophia Lens Photography. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
