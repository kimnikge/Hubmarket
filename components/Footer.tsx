import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">О HubMarket</h3>
            <p className="text-sm">
              HubMarket - ведущая платформа для поставщиков и покупателей в сфере HoReCa. Мы соединяем бизнесы с лучшими
              товарами и услугами.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-500 transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="hover:text-blue-500 transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link href="/suppliers" className="hover:text-blue-500 transition-colors">
                  Поставщики
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-500 transition-colors">
                  О нас
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Для бизнеса</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/register?role=seller" className="hover:text-blue-500 transition-colors">
                  Стать продавцом
                </Link>
              </li>
              <li>
                <Link href="/register?role=buyer" className="hover:text-blue-500 transition-colors">
                  Зарегистрироваться как покупатель
                </Link>
              </li>
              <li>
                <Link href="/advertising" className="hover:text-blue-500 transition-colors">
                  Реклама на платформе
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li>Email: info@hubmarket.com</li>
              <li>Телефон: +7 (999) 123-45-67</li>
              <li>Адрес: г. Москва, ул. Примерная, д. 1</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p>&copy; 2023 HubMarket. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

