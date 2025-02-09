"use client"

import Image from "next/image"
import Link from "next/link"
import { Bell, ChevronLeft, Star } from "lucide-react"
import { useState } from "react"

interface Product {
  id: number
  name: string
  image: string
  price: number
  inStock: boolean
}

const products: Product[] = [
  {
    id: 1,
    name: "Кофемашина Deluxe",
    image: "/placeholder.svg",
    price: 299999,
    inStock: true,
  },
  {
    id: 2,
    name: "Набор посуды Premium",
    image: "/placeholder.svg",
    price: 149999,
    inStock: true,
  },
  {
    id: 3,
    name: "Миксер Professional",
    image: "/placeholder.svg",
    price: 79999,
    inStock: false,
  },
]

export default function SellerPage() {
  const [selectedProduct, setSelectedProduct] = useState(products[0])

  return (
    <div className="min-h-screen bg-[#141414]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-gray-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-lg font-medium">Магазин</h1>
          <button className="w-10 h-10 rounded-full glass-effect flex items-center justify-center">
            <Bell className="w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24 pb-8">
        {/* Main Product Display */}
        <div className="relative aspect-square rounded-[32px] overflow-hidden mb-6">
          <Image
            src={selectedProduct.image || "/placeholder.svg"}
            alt={selectedProduct.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center gap-2 mb-2">
              <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm">
                {products.length} товара
              </div>
              <div className="flex items-center gap-1 text-yellow-400 text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.9</span>
              </div>
            </div>
            <h2 className="text-2xl font-semibold">{selectedProduct.name}</h2>
            <p className="text-gray-300">{selectedProduct.price.toLocaleString()} ₸</p>
          </div>
        </div>

        {/* Product Cards */}
        <div className="space-y-4">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`w-full p-4 rounded-2xl card-gradient border ${
                selectedProduct.id === product.id ? "border-orange-500" : "border-gray-800"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-400">{product.price.toLocaleString()} ₸</p>
                  </div>
                </div>
                <div className="w-12 h-6 rounded-full relative">
                  <div
                    className={`absolute inset-0 rounded-full transition-colors ${
                      product.inStock ? "bg-orange-500" : "bg-gray-700"
                    }`}
                  />
                  <div
                    className={`absolute w-6 h-6 rounded-full bg-white shadow-lg transform transition-transform ${
                      product.inStock ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Settings Sliders */}
        <div className="mt-6 p-4 rounded-2xl card-gradient border border-gray-800">
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Цена</span>
                <span className="text-sm">100%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="100"
                className="w-full h-1 bg-gray-700 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-orange-500"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Наличие</span>
                <span className="text-sm">В наличии</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="100"
                className="w-full h-1 bg-gray-700 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-orange-500"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

