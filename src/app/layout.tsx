import type { Metadata } from "next";
import { Inter, Aclonica, Barlow } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers"
import "./componets/backdrop.css"

const aclonica = Aclonica({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-aclonica'
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NC Venom Football",
  description: "Amateur Football team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.className} ${aclonica.variable}`}>{children}</body>
      </html>
    </Providers>
  );
}
