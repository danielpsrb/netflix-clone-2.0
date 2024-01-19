import GlobalState from "@/context";
import "./globals.css";
import { Inter } from "next/font/google";
import NextAuthProvider from "@/auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Netflix 2.0",
  description: "Netflix clone generation 2.0",
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']

  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <GlobalState>{children}</GlobalState>
        </NextAuthProvider>
      </body>
    </html>
  );
}
