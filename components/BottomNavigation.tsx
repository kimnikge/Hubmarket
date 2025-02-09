import Link from "next/link"
import { Home, Search, Heart, User } from "lucide-react"
import { usePathname } from "next/navigation"

export function BottomNavigation() {
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: "Главная", href: "/" },
    { icon: Search, label: "Поиск", href: "/search" },
    { icon: Heart, label: "Избранное", href: "/favorites" },
    { icon: User, label: "Профиль", href: "/profile" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-4 h-16 flex items-center justify-around">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center ${pathname === item.href ? "text-orange-500" : "text-gray-400"}`}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

