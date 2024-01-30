import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar/Sidebar";
import GlobalStyles from "./providers/GlobalStyles";
import Context from "./providers/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ToDoApp",
  description: "List of todos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Context>
          <GlobalStyles>
            <Sidebar />
            {children}
          </GlobalStyles>
        </Context>
      </body>
    </html>
  );
}
