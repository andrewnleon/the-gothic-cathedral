import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/app.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Gothic Cathedral Kiosk | Created By Andrew Leonberger',
  description: 'Created By Andrew Leonberger',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-us">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
