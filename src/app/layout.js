import { Geist, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Share/Navbar/Navbar";
import Footer from "@/Components/Share/Footer/Footer";
import ToastProvider from "@/Components/ToastProvider/ToastProvider";

const manrope = Manrope({
  variable: "manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tiles Gallery",
  description: "A website to showcase a tile gallery.",
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.className}`}>
      <body>
        <Navbar></Navbar>

        <main className="max-w-310 mx-auto">{children}</main>

        {/* <ToastProvider></ToastProvider> */}

        <Footer></Footer>
      </body>
    </html>
  );
}
