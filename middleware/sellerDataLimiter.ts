import type { Seller } from "../models/Seller"

export function limitSellerData(seller: Seller, isAdmin = false): Partial<Seller> {
  if (isAdmin) return seller

  const limitedSeller: Partial<Seller> = {
    id: seller.id,
    name: seller.name,
    phone: seller.phone,
    status: seller.status,
  }

  if (seller.status === "active") {
    limitedSeller.additionalPhones = seller.additionalPhones
    limitedSeller.products = seller.products
    limitedSeller.favorites = seller.favorites
    limitedSeller.visits = seller.visits
  } else if (seller.status === "trial") {
    limitedSeller.products = seller.products.slice(0, 5)
  }

  return limitedSeller
}

