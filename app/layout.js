import { Inter } from "next/font/google";
import { site } from "../data/election";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: site.title,
  description: site.description,
  metadataBase: new URL("https://irsa-election.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
