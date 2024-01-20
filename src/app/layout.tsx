import type { Metadata } from 'next'
import '../styles/app.css'

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
      <body>{children}</body>
    </html>
  )
}
