import type { Metadata } from "next";
import Link from "next/link";               // ← add this
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdirahman Hassan — Portfolio",
  description: "Software projects, writing, and portfolio of Abdirahman Hassan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* App shell with global background */}
        <div
          className="
            relative isolate
            flex min-h-dvh flex-col
            bg-[url('/bg-camel.png')] bg-cover bg-center bg-no-repeat
            text-neutral-100
          "
        >
          {/* Dark overlay for legibility */}
          <div className="pointer-events-none absolute inset-0 bg-black/55 -z-10" />

          {/* Header */}
          <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-white/10 bg-black/70 backdrop-blur shadow-md">
            <div className="mx-auto flex h-full max-w-6xl items-center justify-center px-6 text-white">
              <nav className="flex gap-8 text-lg font-semibold">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/about" className="hover:underline">About</Link>
                <Link href="/projects" className="hover:underline">Projects</Link>
                <Link href="/writing" className="hover:underline">Writing</Link>
                <Link href="/resume" className="hover:underline">Resume</Link>
                <Link href="/contact" className="hover:underline">Contact</Link>
              </nav>
            </div>
          </header>

          {/* Main content (grows to push footer down) */}
          <main className="relative z-10 flex-1 pt-16">
            {children}
          </main>

          {/* Footer */}
          <footer className="mt-auto border-t bg-black/80 text-white">
            <div className="mx-auto max-w-5xl p-4 text-base text-neutral-300 leading-relaxed text-center">
              © {new Date().getFullYear()} All rights reserved. Please obtain prior consent before
              reproducing, distributing, or using any material from this site.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
