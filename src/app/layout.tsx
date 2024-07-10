import type { Metadata } from 'next';
import { Libre_Franklin } from 'next/font/google';
import 'primereact/resources/themes/saga-blue/theme.css'; // or any other theme
import './globals.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import FooterLink from './components/footerLink/footerLink';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';

const libre = Libre_Franklin({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lepak Blogs Page',
  description: 'My portfolio web .......',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PrimeReactProvider>
        <body className={libre.className}>
          <Navbar />
          <div className="container">
            {children}
            <FooterLink />
          </div>
          <Footer />
        </body>
      </PrimeReactProvider>
    </html>
  );
}
