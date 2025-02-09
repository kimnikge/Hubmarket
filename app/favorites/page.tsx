import Image from "next/image"
import Link from "next/link"

const favoriteSellers = [
  { id: 1, name: "КофеТрейд", rating: 4.8, image: "/suppliers/coffee-trade.jpg" },
  { id: 2, name: "ПосудаМаркет", rating: 4.6, image: "/suppliers/dish-market.jpg" },
]

const favoriteProducts = [
  { id: 1, name: "Кофемашина", price: 150000, image: "/products/coffee-machine.jpg" },
  { id: 2, name: "Набор посуды", price: 25000, image: "/products/dish-set.jpg" },
]

export default function FavoritesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pb-20">
      <header className="sticky top-0 bg-gray-800/80 backdrop-blur-lg border-b border-gray-700 z-50">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Избранное</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <h2 className="text-xl font-semibold mb-4">Избранные поставщики</h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {favoriteSellers.map((seller) => (
            <Link key={seller.id} href={`/supplier/${seller.id}`} className="block group">
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <div className="relative h-32">
                  <Image src={seller.image || "/placeholder.svg"} alt={seller.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-2">{seller.name}</h3>
                  <p className="text-yellow-400">⭐ {seller.rating}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <h2 className="text-xl font-semibold mb-4">Избранные товары</h2>
        <div className="grid grid-cols-2 gap-4">
          {favoriteProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="block group">
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                  <p className="text-blue-400">
                    {product.price.toLocaleString()} <span className="text-sm">тг</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-lg border-t border-gray-800">
        <div className="max-w-md mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex flex-col items-center text-gray-400 hover:text-blue-500 transition-colors">
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
            <Link
              href="/search"
              className="flex flex-col items-center text-gray-400 hover:text-blue-500 transition-colors"
            >
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="text-xs mt-1">Поиск</span>
            </Link>
            <Link href="/favorites" className="flex flex-col items-center text-blue-500 transition-colors">
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
            <Link
              href="/profile"
              className="flex flex-col items-center text-gray-400 hover:text-blue-500 transition-colors"
            >
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
        </div>
      </nav>
    </div>
  )
}

