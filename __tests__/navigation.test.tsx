import { render, screen, fireEvent } from "@testing-library/react"
import { useRouter } from "next/router"
import Home from "../app/page"
import SearchPage from "../app/search/page"
import ProfilePage from "../pages/profile"
import { AppProvider, useApp } from "../context/AppContext"

// Мокаем useRouter
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))

describe("Navigation and Button Functionality", () => {
  const mockPush = jest.fn()
  ;(useRouter as jest.Mock).mockImplementation(() => ({
    push: mockPush,
  }))

  beforeEach(() => {
    mockPush.mockClear()
  })

  test("Home page navigation", () => {
    render(<Home />)

    const searchLink = screen.getByText("Поиск")
    fireEvent.click(searchLink)
    expect(mockPush).toHaveBeenCalledWith("/search")

    const favoritesLink = screen.getByText("Избранное")
    fireEvent.click(favoritesLink)
    expect(mockPush).toHaveBeenCalledWith("/favorites")

    const profileLink = screen.getByText("Профиль")
    fireEvent.click(profileLink)
    expect(mockPush).toHaveBeenCalledWith("/profile")
  })

  test("Search page functionality", () => {
    render(<SearchPage />)

    const searchInput = screen.getByPlaceholderText("Поиск товаров и поставщиков")
    expect(searchInput).toBeInTheDocument()

    const searchButton = screen.getByText("Найти")
    expect(searchButton).toBeInTheDocument()
  })

  test("Profile page logout functionality", () => {
    const { setUser } = useApp()
    render(
      <AppProvider>
        <ProfilePage />
      </AppProvider>,
    )

    const logoutButton = screen.getByText("Выйти")
    fireEvent.click(logoutButton)

    // Проверяем, что функция setUser была вызвана с null
    expect(setUser).toHaveBeenCalledWith(null)
  })
})

