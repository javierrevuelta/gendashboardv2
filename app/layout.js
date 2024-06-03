import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "By Generacion Ads",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        
        </body>
    </html>
  );
}
