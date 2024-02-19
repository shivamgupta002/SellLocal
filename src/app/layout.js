import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "../component/navbar/page";
import Navbar from "../component/navbar/Navbar.jsx";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sell Local",
  description: "Selling product locally in cheap price",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
