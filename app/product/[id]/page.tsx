"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, Heart, ShoppingCart } from "lucide-react"
import Link from "next/link"

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
}

// This is a mock product. In a real application, you would fetch this data from an API
const mockProduct: Product = {
  id: "1",
  name: "Профессиональная кофемашина",
  description:
    "Высококачественная кофемашина для коммерческого использования. Идеально подходит для кафе и ресторанов.",
  price: 150000,
  image: "/placeholder.svg",
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product] = useState<Product>(mockProduct)

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-20">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-semibold">Товар</h1>
          <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
            <Heart className="w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24">
        <div className="aspect-square relative rounded-2xl overflow-hidden mb-6">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
        </div>

        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-400 mb-4">{product.description}</p>
        <p className="text-3xl font-bold text-orange-500 mb-6">{product.price.toLocaleString()} ₸</p>

        <button className="w-full bg-orange-500 text-white py-3 rounded-xl flex items-center justify-center">
          <ShoppingCart className="w-6 h-6 mr-2" />
          Добавить в корзину
        </button>
      </main>
    </div>
  )
}

