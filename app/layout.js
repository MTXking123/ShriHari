import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/layout"


import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shrihari Eye Care and Laser Centre",
  description: "Delhi NCR Best Eye Centre!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > <Layout>
        <Header />
       {children}</Layout>
      </body>
    </html>
  );
}
