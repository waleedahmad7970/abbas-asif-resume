import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import { CVProvider } from '@/context/CVContext';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300','400','500','600','700','800'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Abbas Asif Butt — Full Stack Developer',
  description: 'Senior Full Stack Developer with 6+ years of experience building scalable web applications, mobile apps, and AI-powered systems.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'MERN', 'Abbas Asif Butt'],
  openGraph: {
    title: 'Abbas Asif Butt — Full Stack Developer',
    description: 'Building products, systems & solutions for the digital world.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <CVProvider>
          {children}
        </CVProvider>
      </body>
    </html>
  );
}
