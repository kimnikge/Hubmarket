"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { User, Trash2, AlertCircle } from "lucide-react"
import { useAppContext } from "@/context/AppContext"
import { Layout } from "@/components/Layout"
import type React from "react" // Added import for React

interface AdminUser {
  id: string
  name: string
  telegramId: string
  username: string
  phoneNumber: string
}

export default function ManageAdminsPage() {
  const { isAdmin, checkAdminAccess } = useAppContext()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const [admins, setAdmins] = useState<AdminUser[]>([])
  const [newAdmin, setNewAdmin] = useState({
    telegramId: "",
    phoneNumber: "",
    name: "",
    username: "",
  })

  useEffect(() => {
    const checkAccess = async () => {
      const hasAccess = await checkAdminAccess()
      if (!hasAccess) {
        router.push("/")
      }
    }
    checkAccess()
  }, [checkAdminAccess, router])

  const handleAddAdmin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/admin/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAdmin),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Ошибка при добавлении администратора")
      }

      setAdmins([...admins, data.admin])
      setNewAdmin({ telegramId: "", phoneNumber: "", name: "", username: "" })
    } catch (err) {
      setError(err instanceof Error ? err.message : "Произошла ошибка")
    } finally {
      setIsLoading(false)
    }
  }

  const handleRemoveAdmin = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/remove/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Ошибка при удалении администратора")
      }

      setAdmins(admins.filter((admin) => admin.id !== id))
    } catch (err) {
      setError(err instanceof Error ? err.message : "Произошла ошибка")
    }
  }

  if (!isAdmin) {
    return null
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Управление администраторами</h1>

        {error && (
          <div className="mb-4 p-4 bg-red-500/20 border border-red-500 rounded-lg flex items-center">
            <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
            <p className="text-red-500">{error}</p>
          </div>
        )}

        <form onSubmit={handleAddAdmin} className="mb-8 bg-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Добавить нового администратора</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Telegram ID"
              value={newAdmin.telegramId}
              onChange={(e) => setNewAdmin({ ...newAdmin, telegramId: e.target.value })}
              className="bg-gray-700 text-white rounded-md px-4 py-2"
              required
            />
            <input
              type="text"
              placeholder="Username"
              value={newAdmin.username}
              onChange={(e) => setNewAdmin({ ...newAdmin, username: e.target.value })}
              className="bg-gray-700 text-white rounded-md px-4 py-2"
              required
            />
            <input
              type="text"
              placeholder="Номер телефона"
              value={newAdmin.phoneNumber}
              onChange={(e) => setNewAdmin({ ...newAdmin, phoneNumber: e.target.value })}
              className="bg-gray-700 text-white rounded-md px-4 py-2"
              required
            />
            <input
              type="text"
              placeholder="ФИО"
              value={newAdmin.name}
              onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
              className="bg-gray-700 text-white rounded-md px-4 py-2"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="mt-4 bg-blue-500 text-white rounded-md px-4 py-2 disabled:opacity-50"
          >
            {isLoading ? "Добавление..." : "Добавить администратора"}
          </button>
        </form>

        <div className="bg-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Список администраторов</h2>
          <div className="space-y-4">
            {admins.map((admin) => (
              <div key={admin.id} className="flex items-center justify-between bg-gray-700 rounded-md p-4">
                <div className="flex items-center">
                  <User className="w-6 h-6 mr-4 text-blue-400" />
                  <div>
                    <h3 className="font-medium">{admin.name}</h3>
                    <p className="text-sm text-gray-400">@{admin.username}</p>
                    <p className="text-sm text-gray-400">
                      {admin.telegramId} | {admin.phoneNumber}
                    </p>
                  </div>
                </div>
                <button onClick={() => handleRemoveAdmin(admin.id)} className="text-red-500 hover:text-red-600">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

