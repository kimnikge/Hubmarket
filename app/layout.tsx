import "./globals.css"
import { Inter } from "next/font/google"
import { AppProvider } from "../context/AppContext"
import type React from "react"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata = {
  title: "HubMarket",
  description: "Marketplace for HoReCa",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}

