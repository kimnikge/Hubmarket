import Link from "next/link"
import { Phone, MessageSquare, MessageCircle } from "lucide-react"
import { BrandTelegram } from "./icons/BrandTelegram"

export function ContactBar() {
  return (
    <div className="rounded-2xl glass-effect p-4 mb-8">
      <div className="grid grid-cols-4 gap-4">
        <Link
          href="tel:+77777777777"
          className="flex flex-col items-center text-gray-400 hover:text-orange-500 transition-colors"
        >
          <div className="w-12 h-12 rounded-full card-gradient flex items-center justify-center mb-2">
            <Phone className="w-6 h-6" />
          </div>
          <span className="text-xs">Позвонить</span>
        </Link>
        <Link
          href="/contact"
          className="flex flex-col items-center text-gray-400 hover:text-orange-500 transition-colors"
        >
          <div className="w-12 h-12 rounded-full card-gradient flex items-center justify-center mb-2">
            <MessageSquare className="w-6 h-6" />
          </div>
          <span className="text-xs">Написать</span>
        </Link>
        <Link
          href="https://wa.me/77777777777"
          target="_blank"
          className="flex flex-col items-center text-gray-400 hover:text-orange-500 transition-colors"
        >
          <div className="w-12 h-12 rounded-full card-gradient flex items-center justify-center mb-2">
            <MessageCircle className="w-6 h-6" />
          </div>
          <span className="text-xs">WhatsApp</span>
        </Link>
        <Link
          href="https://t.me/hubmarket_bot"
          target="_blank"
          className="flex flex-col items-center text-gray-400 hover:text-orange-500 transition-colors"
        >
          <div className="w-12 h-12 rounded-full card-gradient flex items-center justify-center mb-2">
            <BrandTelegram className="w-6 h-6" />
          </div>
          <span className="text-xs">Telegram</span>
        </Link>
      </div>
    </div>
  )
}

