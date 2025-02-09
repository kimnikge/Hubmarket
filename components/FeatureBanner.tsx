"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Swiper from "swiper"
import { EffectCoverflow, Pagination, Keyboard, Mousewheel } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

const features = [
  {
    title: "Широкий выбор",
    description: "Тысячи товаров для вашего бизнеса в сфере HoReCa.",
    image: "/images/wide-selection.jpg",
  },
  {
    title: "Надежные поставщики",
    description: "Проверенные компании с высоким рейтингом.",
    image: "/images/reliable-suppliers.jpg",
  },
  {
    title: "Удобный поиск",
    description: "Найдите нужные товары быстро и легко.",
    image: "/images/easy-search.jpg",
  },
  {
    title: "Прямые контакты",
    description: "Общайтесь напрямую с поставщиками.",
    image: "/images/direct-contacts.jpg",
  },
  {
    title: "Актуальные цены",
    description: "Всегда свежая информация о ценах и наличии.",
    image: "/images/current-prices.jpg",
  },
]

export function FeatureBanner() {
  const swiperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = new Swiper(swiperRef.current, {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        },
        keyboard: {
          enabled: true,
        },
        mousewheel: {
          thresholdDelta: 70,
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        modules: [EffectCoverflow, Pagination, Keyboard, Mousewheel],
      })

      return () => {
        swiper.destroy()
      }
    }
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <span className="text-gray-400 uppercase tracking-wider">Откройте для себя</span>
        <h2 className="text-4xl font-bold mt-2 text-blue-500">HubMarket</h2>
        <hr className="w-24 h-1 bg-blue-500 mx-auto my-4" />
        <p className="text-gray-700 max-w-2xl mx-auto">
          HubMarket - ваш надежный партнер в мире HoReCa. Найдите лучших поставщиков и товары для вашего бизнеса.
        </p>
      </div>

      <div ref={swiperRef} className="swiper">
        <div className="swiper-wrapper">
          {features.map((feature, index) => (
            <div
              key={index}
              className="swiper-slide bg-white rounded-lg shadow-lg"
              style={{ width: "300px", height: "450px" }}
            >
              <Image
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
                </div>
                <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                  Узнать больше
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  )
}

