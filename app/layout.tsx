import { Inter } from 'next/font/google';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from 'next-themes';
import { Metadata } from 'next';
import './globals.css';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Brawl Stars Mods',
  description: 'Explore and download mods for Brawl Stars',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6K4D86LZCP"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6K4D86LZCP');
            `,
          }}
        />
      </Head>
      <body className={`${inter.className} flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8 mt-14">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
