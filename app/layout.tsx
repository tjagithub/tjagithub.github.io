import '../global.css';
import { Inter } from 'next/font/google';
import LocalFont from 'next/font/local';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'tjagithub.github.io',
    template: '%s | tjagithub.github.io',
  },
  description: 'Software tester and developer.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: '_tja',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.png',
  },
};
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const calSans = LocalFont({
  src: '../public/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans',
});

/**
 * Layout
 * @description Display a screens helper for debugging.
 *
 * @export
 * @param {{ children: React.ReactNode }} { children }
 * @return {*}
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(' ')}>
      <head></head>
      <body className={`bg-black ${process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined}`}>
        {children}
      </body>
    </html>
  );
}
