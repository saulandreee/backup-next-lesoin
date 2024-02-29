import { Karla, Marcellus, Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Scrolltop from "@/components/Scrolltop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { ThemeProvider } from "@/components/remap";

export const karla = Karla({ subsets: ["latin"], variable: "--font-karla", weight: "400" });
export const marcellus = Marcellus({ subsets: ["latin"], variable: "--font-marcellus", weight: "400" });
export const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto", weight: "400" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-roboto antialiased tracking-wide", karla.variable, marcellus.variable, roboto.variable)}>
        {/* <ThemeProvider>{children}</ThemeProvider> */}
        <Navbar />

        {children}
        <Scrolltop />
        <Footer />
      </body>
    </html>
  );
}
