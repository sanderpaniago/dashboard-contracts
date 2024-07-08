import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SideOver } from '@/components/SideOver'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'View principal contracts FII'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-w-screen min-h-screen flex`}>
        <div className="flex items-start py-4 flex-1">
          <SideOver />
          {children}
        </div>
      </body>
    </html>
  )
}
