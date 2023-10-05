"use client";

import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { Loading } from "./components/loading";
import { Modal } from "./components/Modal/Modal";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Loading>
          <Modal
            show={false}
            toggle={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Navbar />
        </Loading>
        {children}
      </body>
    </html>
  );
}
