import { Geist, Geist_Mono, Rubik, Oleo_Script } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import TopBar from './sections/TopBar';
import Footer from './sections/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
});
const oleoScript = Oleo_Script({
  variable: '--font-Oleo-Script',
  subsets: ['latin'],
  weight: ['400', '700'], // Choose from: '300', '400', '500', '600', '700'
});

export const metadata = {
  title: 'Lone Star Exterior Solutions',
  description:
    "Austin’s #1 Pressure Washing & Exterior Cleaning Service – Restore your home's curb appeal with expert driveway, patio, roof, and siding cleaning. We use eco-friendly, damage-free pressure washing to remove dirt, grime, and mold. ✅ Affordable rates, 100% satisfaction guaranteed! Book your FREE estimate today & transform your property!",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubik.variable} ${oleoScript.variable} antialiased`}
      >
        <div className='sticky top-0 z-50'>
          <TopBar />

          <Navbar />
        </div>
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
