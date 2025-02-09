"use client"

import { useState } from "react"
import { BarChart2, Users, Package, DollarSign, Settings, Bell } from "lucide-react"
import Link from "next/link"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const stats = [
    { icon: Users, label: "Пользователи", value: "1,234" },
    { icon: Package, label: "Товары", value: "5,678" },
    { icon: DollarSign, label: "Доход", value: "9,876,543 ТГ" },
    { icon: BarChart2, label: "Посещения", value: "98,765" },
  ]

  const recentActivities = [
    { id: 1, text: "Новый пользователь зарегистрирован", time: "5 минут назад" },
    { id: 2, text: "Новый заказ #1234 создан", time: "15 минут назад" },
    { id: 3, text: 'Товар "Кофемашина" обновлен', time: "1 час назад" },
    { id: 4, text: "Отзыв добавлен к товару #5678", time: "2 часа назад" },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="sticky top-0 bg-gray-800/80 backdrop-blur-lg border-b border-gray-700 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-white flex items-center gap-2">
              <Settings className="w-6 h-6 text-blue-400" />
              Панель администратора
            </h1>
            <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
              <Bell className="w-6 h-6 text-gray-300" />
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 pb-24">
        <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
          {["dashboard", "users", "products", "orders", "settings"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === "dashboard" && (
          <>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-800 rounded-2xl p-4 flex flex-col items-center justify-center">
                  <stat.icon className="w-8 h-8 mb-2 text-blue-400" />
                  <span className="text-sm text-gray-400">{stat.label}</span>
                  <span className="text-xl font-bold">{stat.value}</span>
                </div>
              ))}
            </div>

            <h2 className="text-lg font-semibold mb-4">Последние действия</h2>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="bg-gray-800 rounded-2xl p-4">
                  <p className="text-sm">{activity.text}</p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab !== "dashboard" && (
          <div className="bg-gray-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Раздел {activeTab}</h2>
            <p className="text-gray-400">Здесь будет содержимое раздела {activeTab}.</p>
          </div>
        )}
      </main>
    </div>
  )
}

