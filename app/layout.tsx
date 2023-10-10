"use client";

import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { Loading } from "./components/loading";
import RegisterModal from "./components/Modal/RegisterModal";
import ToasterProvider from "./components/providers/ToasterProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Loading>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </Loading>
        {children}
      </body>
    </html>
  );
}
