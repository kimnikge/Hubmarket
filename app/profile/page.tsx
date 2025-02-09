"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Settings, ShoppingBag, CreditCard, HelpCircle, LogOut, Store, User } from "lucide-react"

type UserRole = "buyer" | "seller" | null

export default function ProfilePage() {
  const [userRole, setUserRole] = useState<UserRole>(null)
  const [showRoleSelection, setShowRoleSelection] = useState(false)

  const user = {
    name: "Алексей Иванов",
    email: "alexey@example.com",
    avatar: "/placeholder.svg",
  }

  useEffect(() => {
    // Здесь будет логика проверки роли пользователя
    // Если роль не установлена, показываем выбор роли
    const checkUserRole = async () => {
      // Имитация запроса к API
      const role = localStorage.getItem("userRole") as UserRole
      if (role) {
        setUserRole(role)
      } else {
        setShowRoleSelection(true)
      }
    }
    checkUserRole()
  }, [])

  const handleRoleSelection = (role: UserRole) => {
    setUserRole(role)
    setShowRoleSelection(false)
    localStorage.setItem("userRole", role as string)
    // Здесь будет логика сохранения роли на сервере
  }

  const buyerMenuItems = [
    { icon: ShoppingBag, text: "Мои заказы", href: "/orders" },
    { icon: CreditCard, text: "Способы оплаты", href: "/payment-methods" },
    { icon: Settings, text: "Настройки", href: "/settings" },
    { icon: HelpCircle, text: "Помощь", href: "/help" },
  ]

  const sellerMenuItems = [
    { icon: Store, text: "Мой магазин", href: "/my-store" },
    { icon: ShoppingBag, text: "Заказы", href: "/seller-orders" },
    { icon: CreditCard, text: "Финансы", href: "/finances" },
    { icon: Settings, text: "Настройки", href: "/settings" },
    { icon: HelpCircle, text: "Помощь", href: "/help" },
  ]

  const menuItems = userRole === "buyer" ? buyerMenuItems : sellerMenuItems

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pb-20">
      <header className="bg-gray-800/80 backdrop-blur-lg border-b border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center">
            <div className="relative w-20 h-20 mr-4">
              <Image
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
                fill
                className="object-cover rounded-full border-2 border-blue-500"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">{user.name}</h1>
              <p className="text-gray-400">{user.email}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {showRoleSelection ? (
          <div className="bg-gray-800 rounded-2xl p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Выберите вашу роль</h2>
            <div className="space-y-4">
              <button
                onClick={() => handleRoleSelection("buyer")}
                className="w-full bg-blue-500 text-white rounded-xl py-3 font-medium hover:bg-blue-600 transition-colors"
              >
                Покупатель
              </button>
              <button
                onClick={() => handleRoleSelection("seller")}
                className="w-full bg-green-500 text-white rounded-xl py-3 font-medium hover:bg-green-600 transition-colors"
              >
                Продавец
              </button>
            </div>
          </div>
        ) : (
          <>
            <nav className="space-y-2">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center p-4 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-colors"
                >
                  <item.icon className="w-6 h-6 mr-4 text-blue-400" />
                  <span className="text-white">{item.text}</span>
                </Link>
              ))}
            </nav>

            <div className="mt-8">
              <button className="flex items-center p-4 w-full bg-red-500 text-white rounded-2xl hover:bg-red-600 transition-colors">
                <LogOut className="w-6 h-6 mr-4" />
                <span>Выйти</span>
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  )
}

