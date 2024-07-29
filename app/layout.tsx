import type { Metadata } from "next";
import "./globals.css";
import { nunito, poppins, roboto, roboto_Slab } from "@/components/ui/font/f";
import { QuizProvider } from "@/context/contextProvider";


export const metadata: Metadata = {
  title: "Quiz",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#808836] max-w-[1440px] max-h-screen mx-auto h-screen`}>
        <QuizProvider>
          <div className="md:px-10 px-3 h-full">{children}</div>
        </QuizProvider>
      </body>
    </html>
  );
}
