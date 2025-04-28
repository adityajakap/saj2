"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { AlignRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/blog" className="text-gradient-olive text-xl font-bold">
            Sarifah Ainun Jariyah
          </Link>

          {/* desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="font-medium hover:text-primary">
              Rumah Digital
            </Link>
            <Link href="/beritas" className="font-medium hover:text-primary">
              Berita
            </Link>
            <Link href="/galleries" className="font-medium hover:text-primary">
              Gallery
            </Link>
            <Link href="/suara-sajs" className="font-medium hover:text-primary">
              Suara SAJ
            </Link>
          </nav>


          {/* mobile menu button */}
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <AlignRight size={24} />}
          </Button>
        </div>


        {/* mobile */}
        {isMenuOpen && (
          <nav className="pt-4 pb-3 md:hidden">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="font-medium hover:text-primary">
                Rumah Digital
              </Link>
              <Link href="/beritas" className="font-medium py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                Berita
              </Link>
              <Link href="/galleries" className="font-medium py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                Gallery
              </Link>
              <Link href="/suara-sajs" className="font-medium py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                Suara SAJ
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header >
  )
}
