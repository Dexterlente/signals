import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./_navbar/navbar";
import Footer from "./_navbar/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Daily Signals",
  description:
    "The Daily Signals: Unlock the power of precise technical analysis with our expert insights into cryptocurrency markets. At The Daily Signals, we provide daily updates and in-depth analysis on Bitcoin, Ethereum, and other leading digital assets. Stay ahead of the curve with our cutting-edge charting tools, trend indicators, and market forecasts. Whether you're a seasoned trader or new to crypto investing, our comprehensive signals and actionable strategies will help you make informed decisions and maximize your investment potential. Join our community and transform your crypto trading experience today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <NavBar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
