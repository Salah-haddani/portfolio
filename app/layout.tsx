import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { BriefcaseBusiness, GlobeLock, House, SquareLibrary } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salah Haddani",
  description: "Portfolio of Salah Haddani",
  icons: "/public/salah.png",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    {
      name: "About",
      link: "/",
      icon:<House />
    },
    {
      name: "Projects",
      link: "/projects",
      icon:<GlobeLock />
    },
   
    {
      name: "Experiences",
      link: "/experiences",
      icon:<BriefcaseBusiness />

    },
    {
      name: "Skills",
      link: "/skills",
      icon:<SquareLibrary />

    },
  ];
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen over  flex-col items-center bg-[#ffff] justify-start gap-20 pt-24 px-10 md:px-24 pb-4">
          <FloatingNav navItems={navItems} />
        {children}
        </main>
      </body>
    </html>
  );
}
