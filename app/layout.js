import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-head",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Frontline Pest Control | Protecting Homes. Securing Businesses.",
    template: "%s | Frontline Pest Control",
  },
  description:
    "Frontline Pest Control, Gurugram — safe, government-licensed pest management for homes, offices, restaurants, hotels, hospitals, schools, warehouses and industries. Termite, rodent, cockroach, bed bug, mosquito and fly control plus AMC.",
  keywords: [
    "pest control Gurugram", "Frontline Pest Control", "termite control", "rodent control",
    "commercial pest management", "AMC pest control", "cockroach control", "bed bug control",
  ],
  openGraph: {
    title: "Frontline Pest Control | Protecting Homes. Securing Businesses.",
    description: "Safe, government-licensed pest management for homes and businesses in Gurugram and beyond.",
    siteName: "Frontline Pest Control",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#007a8a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
