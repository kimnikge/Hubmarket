import type React from "react"
import { BottomNavigation } from "./BottomNavigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

interface LayoutProps {
  children: React.ReactNode
  title: string
  backLink?: string
}

export function Layout({ children, title, backLink }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-white pb-16">
      <header className="fixed top-0 left-0 right-0 bg-gray-800 border-b border-gray-700 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center">
          {backLink && (
            <Link href={backLink} className="mr-4">
              <ChevronLeft className="w-6 h-6" />
            </Link>
          )}
          <h1 className="text-xl font-semibold">{title}</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 pt-20">{children}</main>
      <BottomNavigation />
    </div>
  )
}

