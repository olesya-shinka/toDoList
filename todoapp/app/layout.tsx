import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar/Sidebar";
import GlobalStyles from "./providers/GlobalStyles";
import Context from "./providers/Context";
import { ClerkProvider, auth } from "@clerk/nextjs";

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
  const { userId } = auth();

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Context>
            <GlobalStyles>
              {userId && <Sidebar />}
              <div className="all">{children}</div>
            </GlobalStyles>
          </Context>
        </body>
      </html>
    </ClerkProvider>
  );
}
