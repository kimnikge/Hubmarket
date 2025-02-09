import { NextResponse } from "next/server"
import { checkAdminAccess } from "@/lib/auth"

export async function POST(req: Request) {
  try {
    const isAdmin = await checkAdminAccess(req)
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await req.json()
    const { telegramId, phoneNumber, name, username } = body

    // Здесь должна быть логика добавления администратора в базу данных
    // Для примера возвращаем моковые данные
    const newAdmin = {
      id: Date.now().toString(),
      telegramId,
      phoneNumber,
      name,
      username,
    }

    return NextResponse.json({ admin: newAdmin })
  } catch (error) {
    console.error("Error adding admin:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

