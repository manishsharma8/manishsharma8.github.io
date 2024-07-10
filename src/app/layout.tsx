import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Manish Sharma',
  description: `Manish Sharma is a software engineer building engaging and accessible products for the web`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-slate-900 text-slate-400 selection:bg-cyan-300 selection:text-cyan-900 leading-relaxed antialiased">
        {children}
      </body>
    </html>
  );
}
