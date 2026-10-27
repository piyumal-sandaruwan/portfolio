import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
export const metadata: Metadata = { title:"Piyumal Sandaruwan | Cloud & DevOps", description:"Cloud engineering, DevOps, networking, cybersecurity, and software development portfolio." };
export const viewport: Viewport = { themeColor:"#070A12", width:"device-width", initialScale:1 };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><Navbar />{children}<Footer /></body></html>; }
