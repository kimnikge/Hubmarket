export interface Seller {
  id: string
  name: string
  email: string
  phone: string
  additionalPhones: string[]
  status: "pending" | "trial" | "active" | "inactive"
  trialEndsAt: Date | null
  subscriptionEndsAt: Date | null
  products: Product[]
  favorites: number
  visits: number
}

