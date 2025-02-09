"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import Swiper from "swiper"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const categories = [
  "Посуда",
  "Мебель",
  "Текстиль",
  "Оборудование",
  "Продукты",
  "Напитки",
  "Инвентарь",
  "Освещение",
  "Декор",
  "Униформа",
]

export function CategoryCarousel() {
  const swiperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = new Swiper(swiperRef.current, {
        slidesPerView: "auto",
        spaceBetween: 12,
        centeredSlides: false,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        modules: [Autoplay, Pagination],
      })

      return () => {
        swiper.destroy()
      }
    }
  }, [])

  return (
    <div className="w-full mb-8">
      <div ref={swiperRef} className="swiper w-full pb-8">
        <div className="swiper-wrapper">
          {categories.map((category) => (
            <div key={category} className="swiper-slide" style={{ width: "auto" }}>
              <Link
                href={`/category/${category.toLowerCase()}`}
                className="block px-6 py-3 bg-gray-800 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:bg-gray-700 transition-all text-sm border border-gray-700"
              >
                {category}
              </Link>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  )
}

