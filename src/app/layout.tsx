import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";

const headingFont = Playfair_Display({ subsets: ["latin"], variable: "--font-heading", weight: ["600"] });
const bodyFont = Jost({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "HairFlix Unisex Salon | Professional Hair Styling in Gota, Ahmedabad",
  description: "Expert hair cuts, color & styling for men & women in Gota. Located on University Road opposite Lambda Research. Call 093768 07777 to book.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={headingFont.variable + " " + bodyFont.variable}>
      <body>{children}</body>
    </html>
  );
}
