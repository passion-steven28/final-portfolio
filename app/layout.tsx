import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MarqueeComp from '@/components/reused/MarqueeComp'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Passion steven',
  description: 'personal portfolio websites who worked in tanzania dar es salaam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer>
          <MarqueeComp />
        </footer>
        </body>
    </html>
  )
}
