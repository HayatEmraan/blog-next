import FooterComp from "@/components/shared/footer/footer";
import "./globals.css";
import { Inter } from "next/font/google";
import HeaderComp from "@/components/shared/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HY-05 | Blog",
  description: "Learning is a never-ending process.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <HeaderComp />
        {children}
        <FooterComp />
      </body>
    </html>
  );
}
