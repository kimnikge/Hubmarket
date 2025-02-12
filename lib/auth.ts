import { jwtVerify } from "jose"

// Экспортируем константы, чтобы их можно было использовать в других файлах
export const JWT_SECRET = process.env.JWT_SECRET
export const NEXT_PUBLIC_TELEGRAM_BOT_USERNAME = process.env.NEXT_PUBLIC_TELEGRAM_BOT_USERNAME
export const TELEGRAM_API_KEY = process.env.TELEGRAM_API_KEY

export async function verifyAuth(token: string) {
  try {
    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined")
    }
    const verified = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET))
    return verified.payload
  } catch (err) {
    throw new Error("Your token has expired.")
  }
}

// Экспортируем функцию для использования в компонентах
export const handleTelegramLogin = async () => {
  const botUsername = NEXT_PUBLIC_TELEGRAM_BOT_USERNAME;
  if (!botUsername) {
    throw new Error("Telegram bot username is not defined");
  }
  const telegramUrl = `https://t.me/${botUsername}`;
  window.open(telegramUrl, "_blank");
};

