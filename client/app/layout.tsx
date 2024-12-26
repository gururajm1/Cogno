import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Home || Cogno',
  description: 'Empower young minds through play',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#1a1a1a] text-white min-h-screen">{children}</body>
    </html>
  )
}

