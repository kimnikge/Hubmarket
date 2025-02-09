"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import Link from "next/link"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь должна быть логика поиска
    // Для примера просто установим пустой массив результатов
    setSearchResults([])
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-20">
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-gray-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-xl font-semibold">Поиск</h1>
          <div className="w-10 h-10"></div>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24">
        <form onSubmit={handleSearch} className="relative mb-8">
          <input
            type="text"
            placeholder="Поиск товаров и поставщиков"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 pl-12 pr-4 rounded-2xl glass-effect border border-gray-800 focus:outline-none focus:border-orange-500"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-orange-500">
            Найти
          </button>
        </form>

        {searchResults.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {searchResults.map((result) => (
              <div key={result.id} className="bg-gray-800 rounded-xl p-4">
                <h3>{result.name}</h3>
                {/* Добавьте здесь дополнительную информацию о результате */}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">Нет результатов поиска</p>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 glass-effect border-t border-gray-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-around">
          <Link href="/" className="flex flex-col items-center text-gray-400">
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
          <Link href="/search" className="flex flex-col items-center text-orange-500">
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

