import Image from "next/image"

export default function OrdersPage() {
  const orders = [
    { id: "1", product: "Кофемашина", price: "150 000 ТГ", status: "В пути", image: "/placeholder.svg" },
    { id: "2", product: "Набор посуды", price: "25 000 ТГ", status: "Доставлен", image: "/placeholder.svg" },
    { id: "3", product: "Миксер", price: "30 000 ТГ", status: "Обработка", image: "/placeholder.svg" },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pb-20">
      <header className="bg-gray-800/80 backdrop-blur-lg border-b border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-white">Мои заказы</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-gray-800 rounded-2xl p-4 flex items-center">
              <div className="relative w-20 h-20 mr-4">
                <Image
                  src={order.image || "/placeholder.svg"}
                  alt={order.product}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-medium text-white">{order.product}</h3>
                <p className="text-sm text-gray-400">Заказ #{order.id}</p>
                <p className="text-lg font-bold text-white">{order.price}</p>
              </div>
              <div className="text-right">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">{order.status}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

