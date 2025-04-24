import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AFM Management | Supporting Female Content Creators",
  description:
    "Professional agency helping female creators launch, manage and grow their profiles on premium content subscription platforms.",
  openGraph: {
    title: "AFM Management | Supporting Female Content Creators",
    description:
      "Professional agency helping female creators launch, manage and grow their profiles on premium content subscription platforms.",
    url: "https://afm-management.com",
    siteName: "AFM Management",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AFM Management",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
