import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast'; // Import Toaster

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Department of Holistic Education - Vidya Bharti',
  description: 'Joint Conference',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <meta httpEquiv="refresh" content="1000" />
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <title>Department of Holistic Education - Vidya Bharti</title>
      <meta name="keywords" content="RASE2023, RASE 2023, National Conference on Recent Advances in School Education, rase 2023, r a s e, mahakumbh 2024, mahakumbh 2023, महाकुंभ 2023, महाकुंभ 2024, dhe , department of holistic education" />
      <meta name="description" content="Joint Conference" />
      <meta httpEquiv="cache-control" content="no-cache" />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Expires" content="-1" />
      <meta name="google-adsense-account" content="ca-pub-4330032354977759" />
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" /> {/* Add Toaster here */}
      </body>
    </html>
  );
}
