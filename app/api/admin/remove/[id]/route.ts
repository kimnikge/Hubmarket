import { NextResponse } from "next/server"
import { checkAdminAccess } from "@/lib/auth"

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const isAdmin = await checkAdminAccess(req)
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id } = params

    // Здесь должна быть логика удаления администратора из базы данных
    // Для примера просто возвращаем успешный ответ

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error removing admin:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

