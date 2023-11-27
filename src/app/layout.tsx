"use client"

import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from './components/sidebar'
import { FileProvider } from './context';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <FileProvider>
      <html lang="en">
        <body className={inter.className}>
          <Sidebar/>
          {children}
        </body>
      </html>
    </FileProvider>
  )
}
