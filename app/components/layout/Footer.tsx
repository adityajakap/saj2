import Link from "next/link"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Sarifah Ainun Jariyah</h3>
            <p className="text-gray-600">
              Anggota DPR RI untuk Banten dengan visi membawa perubahan positif
              melalui kebijakan yang inovatif dan inklusif.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-primary">
                  Rumah Digital
                </Link>
              </li>
              <li>
                <Link href="/beritas" className="text-gray-600 hover:text-primary">
                  Berita
                </Link>
              </li>
              <li>
                <Link href="/galleries" className="text-gray-600 hover:text-primary">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/suara-sajs" className="text-gray-600 hover:text-primary">
                  Suara SAJ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Kontak</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Email: info@sarifahainun.com</li>
              <li className="text-gray-600">Phone: +62 800 1234 5678</li>
              <li className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-600 hover:text-primary">
                  FB
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  IG
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-600">
          <p>© {currentYear} Sarifah Ainun Jariyah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
