"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Package, Heart, BarChart2, AlertTriangle, Plus, Share2, MessageSquare } from "lucide-react"

interface Story {
  id: number
  image: string
  title: string
}

interface Post {
  id: number
  images: string[]
  description: string
  likes: number
  comments: number
  timestamp: string
}

export default function MyStorePage() {
  const [activeTab, setActiveTab] = useState<"posts" | "products">("posts")

  const stories: Story[] = [
    { id: 1, image: "/placeholder.svg", title: "Новинки" },
    { id: 2, image: "/placeholder.svg", title: "Акции" },
    { id: 3, image: "/placeholder.svg", title: "Популярное" },
  ]

  const posts: Post[] = [
    {
      id: 1,
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      description: "Новая коллекция посуды уже в продаже!",
      likes: 24,
      comments: 5,
      timestamp: "2 часа назад",
    },
    {
      id: 2,
      images: ["/placeholder.svg"],
      description: "Специальное предложение на кофемашины",
      likes: 18,
      comments: 3,
      timestamp: "5 часов назад",
    },
  ]

  const products = [
    { id: 1, name: "Кофемашина", price: 150000, image: "/placeholder.svg" },
    { id: 2, name: "Набор посуды", price: 25000, image: "/placeholder.svg" },
    { id: 3, name: "Миксер", price: 30000, image: "/placeholder.svg" },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pb-20">
      <header className="bg-gray-800/80 backdrop-blur-lg border-b border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Мой магазин</h1>
            <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Stories Section */}
        <div className="mb-8">
          <div className="flex space-x-4 overflow-x-auto pb-4">
            <div className="flex-shrink-0 w-20">
              <button className="w-20 h-20 rounded-xl bg-gray-800 flex items-center justify-center">
                <Plus className="w-8 h-8 text-blue-500" />
              </button>
              <p className="text-xs text-center mt-1">Добавить</p>
            </div>
            {stories.map((story) => (
              <div key={story.id} className="flex-shrink-0 w-20">
                <div className="w-20 h-20 rounded-xl bg-gray-800 overflow-hidden">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-center mt-1">{story.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab("posts")}
            className={`px-4 py-2 rounded-full ${
              activeTab === "posts" ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-300"
            }`}
          >
            Публикации
          </button>
          <button
            onClick={() => setActiveTab("products")}
            className={`px-4 py-2 rounded-full ${
              activeTab === "products" ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-300"
            }`}
          >
            Товары
          </button>
        </div>

        {activeTab === "posts" ? (
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-gray-800 rounded-xl p-4">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {post.images.map((image, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt=""
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm mb-3">{post.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1">
                      <MessageSquare className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </button>
                  </div>
                  <button>
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-800 rounded-xl overflow-hidden">
                <div className="aspect-square relative">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">{product.name}</h3>
                  <p className="text-blue-400">
                    {product.price.toLocaleString()} <span className="text-sm">тг</span>
                  </p>
                </div>
              </div>
            ))}
            <Link href="/add-product" className="bg-gray-800 rounded-xl aspect-square flex items-center justify-center">
              <Plus className="w-8 h-8 text-blue-500" />
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}

