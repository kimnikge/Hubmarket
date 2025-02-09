import Link from "next/link"

const plans = [
  {
    name: "Базовый",
    price: "5000",
    features: ["До 5 товаров", "1 номер телефона", "Базовая аналитика", "Поддержка по email"],
  },
  {
    name: "Продвинутый",
    price: "15000",
    features: [
      "До 100 товаров",
      "5 номеров телефона",
      "Расширенная аналитика",
      "Приоритетная поддержка",
      "Продвижение в каталоге",
    ],
  },
  {
    name: "Премиум",
    price: "30000",
    features: [
      "Неограниченное количество товаров",
      "Неограниченное количество номеров",
      "Полная аналитика",
      "Персональный менеджер",
      "Топовые позиции в каталоге",
      "API доступ",
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pb-20">
      <header className="bg-gray-800/80 backdrop-blur-lg border-b border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-white">Выберите тариф</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-gray-800 rounded-2xl p-6 flex flex-col">
              <h2 className="text-xl font-semibold mb-4">{plan.name}</h2>
              <p className="text-3xl font-bold mb-6">
                {plan.price} ТГ<span className="text-sm font-normal">/месяц</span>
              </p>
              <ul className="mb-6 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={`/checkout?plan=${plan.name}`}
                className="block w-full bg-blue-500 text-white rounded-xl py-3 text-center font-medium hover:bg-blue-600 transition-colors"
              >
                Выбрать
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

