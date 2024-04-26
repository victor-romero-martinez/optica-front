import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import BannerPromoDiscount from "./components/ui/BannerPromoDiscount";

import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["200", "400", "600", '800'] });

export const metadata: Metadata = {
  title: "Óptica",
  description: "Pagina de una óptica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <BannerPromoDiscount />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
