import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-slate-900 text-slate-300 selection:bg-cyan-300 selection:text-cyan-900 leading-relaxed antialiased">
        {children}
      </body>
    </html>
  );
}
