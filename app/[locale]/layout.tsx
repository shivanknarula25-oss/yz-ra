import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google"; // Added Orbitron for futuristic headers
import "../globals.css";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  title: "YZ-RA | Alliance",
  description: "The global alliance of robotics innovators.",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!['en', 'zh'].includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${orbitron.variable} bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary`}>
        <NextIntlClientProvider messages={messages}>
          <AuthProvider>
            <div className="relative min-h-screen flex flex-col">
              {/* Grid Background */}
              <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
              </div>

              <Navbar />
              <main className="flex-1 relative z-10 pt-20">
                {children}
              </main>
              <Footer />
            </div>
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
