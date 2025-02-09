import Link from "next/link"
import Image from "next/image"
import { Search, Bell, ChevronLeft } from "lucide-react"

const categories = [
  { id: 1, name: "Посуда", image: "/placeholder.svg?height=200&width=200", items: "142 товара" },
  { id: 2, name: "Мебель", image: "/placeholder.svg?height=200&width=200", items: "89 товаров" },
  { id: 3, name: "Текстиль", image: "/placeholder.svg?height=200&width=200", items: "64 товара" },
  { id: 4, name: "Оборудование", image: "/placeholder.svg?height=200&width=200", items: "256 товаров" },
]

const topSellers = [
  { id: 1, name: "Алексей", avatar: "/placeholder.svg?height=64&width=64", rating: 4.8 },
  { id: 2, name: "Мария", avatar: "/placeholder.svg?height=64&width=64", rating: 4.9 },
  { id: 3, name: "Дмитрий", avatar: "/placeholder.svg?height=64&width=64", rating: 4.7 },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pb-20">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">HubMarket</h1>
          <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
            <Bell className="w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24">
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Поиск товаров и поставщиков"
            className="w-full h-12 pl-12 pr-4 rounded-2xl bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Категории</h2>
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="relative aspect-square rounded-2xl overflow-hidden group"
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <h3 className="text-sm font-medium">{category.name}</h3>
                  <p className="text-xs text-gray-300">{category.items}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Топ продавцов</h2>
            <Link href="/sellers" className="text-orange-500">
              Все
            </Link>
          </div>
          <div className="flex space-x-4">
            {topSellers.map((seller) => (
              <Link key={seller.id} href={`/seller/${seller.id}`} className="w-16 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                  <Image
                    src={seller.avatar || "/placeholder.svg"}
                    alt={seller.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs text-center">{seller.name}</span>
                <div className="flex items-center text-xs text-yellow-500">
                  <span>⭐</span>
                  <span>{seller.rating}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 h-16 flex items-center justify-around">
          <Link href="/" className="flex flex-col items-center text-orange-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-xs mt-1">Главная</span>
          </Link>
          <Link href="/search" className="flex flex-col items-center text-gray-400">
            <Search className="w-6 h-6" />
            <span className="text-xs mt-1">Поиск</span>
          </Link>
          <Link href="/favorites" className="flex flex-col items-center text-gray-400">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="text-xs mt-1">Избранное</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center text-gray-400">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="text-xs mt-1">Профиль</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

