import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout/Layout";

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout
          className="flex flex-col h-screen max-h-screen"
        >
          <div
            className="flex-grow overflow-y-auto bg-page text-default-text"
          >
            {children}
          </div>
        </Layout>
      </body>
    </html>
  );
}
