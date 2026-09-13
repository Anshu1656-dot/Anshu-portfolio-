import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const display = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  // Update this to your real deployed domain once you have one.
  metadataBase: new URL("https://anshu-kashyap-portfolio.vercel.app"),
  title: "Anshu Kashyap — Video Editor & Social Media Content Creator",
  description:
    "Portfolio of Anshu Kashyap, a video editor and social media content creator specializing in cinematic edits, reels, and storytelling content. 32K+ Instagram followers, 2 years of editing experience.",
  keywords: [
    "Anshu Kashyap",
    "video editor",
    "social media content creator",
    "reel editing",
    "cinematic edits",
    "Instagram creator",
    "Indore video editor",
  ],
  openGraph: {
    title: "Anshu Kashyap — Video Editor & Social Media Content Creator",
    description:
      "Cinematic edits, reels, and storytelling content. 32K+ Instagram followers, 2 years of editing experience.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anshu Kashyap — Video Editor & Social Media Content Creator",
    description:
      "Cinematic edits, reels, and storytelling content. 32K+ Instagram followers, 2 years of editing experience.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-ink font-sans text-paper antialiased selection:bg-teal/30 selection:text-paper">
        {children}
      </body>
    </html>
  );
}
