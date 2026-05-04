import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Figtree } from "next/font/google";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: "MindHavenNutrition| Clarity & Cognitive Health",
  description: "Discover mindfulness and brain health solutions to help you find clarity and focus in your daily life.",
  openGraph: {
    "title": "MindfulBrains - Clarity & Mindfulness",
    "description": "Achieve clarity and focus with our natural brain-health supplements and tools.",
    "siteName": "MindfulBrains",
    "type": "website"
  },
};


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} ${openSans.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
