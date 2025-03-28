"use client";

import Providers from "providers";
import Layout from "../components/layout";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ToastContainer />
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
