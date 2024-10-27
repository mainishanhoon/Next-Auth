import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';
import ThemeProvider from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/sonner';

const montserrat = localFont({
  src: './fonts/Montserrat.woff',
  variable: '--font-montserrat',
  weight: '1200',
});

export const metadata: Metadata = {
  title: 'Next-Auth',
  description: 'Made by @mainishanhoon',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${montserrat.className} overflow-hidden`}
        suppressHydrationWarning
      >
        <NextTopLoader color="hsl(var(--primary))" showSpinner={false} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
