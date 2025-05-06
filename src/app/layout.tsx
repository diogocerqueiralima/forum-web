import type { Metadata } from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/components/Header";
import {UserServiceProvider} from "@/context/UserServiceContext";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forum",
  description: "The best forum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <UserServiceProvider url={"http://localhost:9090"}>
          <Header />
          { children }
        </UserServiceProvider>
      </body>
    </html>
  );
}
