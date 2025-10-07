import './globals.css';
import Navbar from '../components/Common/Navbar';
import Footer from '../components/Common/Footer';
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";

const poppins = Poppins({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased`}
        style={{
          "--color-blue-900": "#0B1D5B",
          "--color-blue-600": "#2248BA",
          "--color-heading": "#1E1E1E",
          "--color-text": "#333333",
          "--color-overlay": "rgba(0,0,0,0.4)",
        }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
