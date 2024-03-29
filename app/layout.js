import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
      <div className="md:px-10 shadow-md">
      <Header></Header>
      {children}
     
      </div>
      <Footer></Footer>
      </body>
    </html>
  );
}
