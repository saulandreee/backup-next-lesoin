import { Karla, Marcellus, Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import Scrolltop from "@/components/Scrolltop";
import { Toaster } from "@/components/ui/toaster";
// import { ThemeProvider } from "@/components/remap";

export const karla = Karla({ subsets: ["latin"], variable: "--font-karla", weight: "400" });
export const marcellus = Marcellus({ subsets: ["latin"], variable: "--font-marcellus", weight: "400" });
export const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto", weight: "400" });

export const metadata = {
  title: "Le Soin Klinik Utama - Aesthetic Cell Activation Clinic",
  description: "The first genetic-based cellular activation clinic",
  icons: {
    icon: "/mini-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-roboto antialiased tracking-wide", karla.variable, marcellus.variable, roboto.variable)}>
        {/* <ThemeProvider>{children}</ThemeProvider> */}
        <Navbar />

        {/* <Scrolltop /> */}
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
