import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import "../globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sarifah Ainun Jariyah - DPR RI',
  description: 'Official website of Sarifah Ainun Jariyah, DPR RI for Banten.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
