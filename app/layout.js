import { Karla, Marcellus } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
// import { ThemeProvider } from "@/components/remap";

export const karla = Karla({ subsets: ["latin"], variable: "--font-karla", weight: "400" });
export const marcellus = Marcellus({ subsets: ["latin"], variable: "--font-marcellus", weight: "400" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-karla antialiased", karla.variable, marcellus.variable)}>
        {/* <ThemeProvider>{children}</ThemeProvider> */}
        {children}
      </body>
    </html>
  );
}
