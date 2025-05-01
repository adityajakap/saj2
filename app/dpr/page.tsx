"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "../globals.css";
import Button from "../components/Button";

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showBakn, setshowBakn] = useState(false);
  const [showKomdigi, setshowKomdigi] = useState(false);
  const [showLuar, setshowLuar] = useState(false);
  const [showKemhan, setshowKemhan] = useState(false);
  const [activeTab, setActiveTab] = useState("transformasi");
  const [loading, setLoading] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  // Set hasMounted true setelah komponen dimount
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Simulasi loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Deteksi perangkat mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Cegah mismatch saat hydration
  if (!hasMounted) return null;

  // Loader
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <img src="/images/loader.gif" alt="Memuat..." className="w-48" />
      </div>
    );
  }
  return (
    <div className="flex h-screen w-full items-center justify-center">
      {/* Main container with viewport dimensions */}
      <div className="relative h-screen w-screen overflow-hidden">
        {/* Container with fixed dimensions that holds both background and buildings */}
        <div
          className="absolute"
          style={{
            width: isMobile ? "100%" : "1920px",
            height: isMobile ? "100%" : "1080px",
            left: "50%",
            transform: "translateX(-50%)",
            top: "0",
          }}
        >
          {/* Background Image as part of the fixed container */}
          <div className="absolute left-0 top-0 size-full">
            <Image
              src="/images/dpr-bg.png"
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <Button />

          {isMobile ? (
            <>
              {/* Mobile Layout */}
              {showBakn && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
                  <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white px-6 py-10 shadow-2xl ring-4 ring-black scrollbar-hide md:px-12 md:py-14">
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 rounded-full bg-gray-200 px-3 py-1 text-sm text-black transition hover:bg-gray-400"
                      onClick={() => setshowBakn(false)}
                    >
                      ✕
                    </button>

                    {/* Header */}
                    <div className="mb-10 text-center">
                      <h1 className="mb-3 text-3xl font-extrabold text-red-700">
                        BADAN AKUNTABILITAS KEUANGAN NEGARA DPR RI
                      </h1>
                      <p className="text-lg font-medium text-gray-600">
                        Pilar Penguatan Pengawasan Keuangan Negara oleh DPR RI
                      </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                      {/* Left - Foto & Info */}
                      <div className="space-y-8">
                        <div className="relative h-80 w-full overflow-hidden rounded-xl shadow-md">
                          <Image
                            src="/images/dpr/bakn-1.jpg"
                            alt="BAKN DPR"
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="rounded-xl bg-gray-100 p-6 shadow-inner">
                          <h2 className="mb-4 text-xl font-bold text-gray-800">
                            Peran dan Fungsi Utama
                          </h2>
                          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700 md:text-base">
                            <li>
                              Meningkatkan kualitas pengawasan atas pengelolaan
                              keuangan negara.
                            </li>
                            <li>
                              Menjamin akuntabilitas dan transparansi anggaran
                              negara.
                            </li>
                            <li>
                              Memfasilitasi tindak lanjut terhadap temuan audit
                              BPK.
                            </li>
                            <li>
                              Menyampaikan hasil telaah kepada Komisi-Komisi DPR
                              RI.
                            </li>
                            <li>
                              Menjadi penghubung antara hasil audit dan
                              kebijakan DPR.
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Right - Text Content */}
                      <div className="flex h-full flex-col justify-between">
                        <div className="space-y-5 text-justify text-sm leading-relaxed text-gray-800 md:text-base">
                          <p>
                            <strong>BAKN DPR RI</strong> merupakan alat
                            kelengkapan dewan yang memainkan peran penting dalam
                            memastikan bahwa pengelolaan dan pertanggungjawaban
                            keuangan negara dilakukan secara akuntabel,
                            transparan, dan efisien.
                          </p>
                          <p>
                            Dalam sinerginya bersama BPK RI, BAKN tidak hanya
                            menelaah hasil audit tetapi juga memberikan masukan
                            strategis kepada DPR sebagai dasar pengambilan
                            keputusan anggaran dan pengawasan.
                          </p>
                          <p>
                            Dengan forum kerja, kolaborasi lintas lembaga, serta
                            mekanisme umpan balik terhadap BPK, BAKN menjadi
                            kunci dalam menciptakan tata kelola keuangan negara
                            yang lebih baik.
                          </p>
                          <p>
                            Ke depan, BAKN diharapkan terus meningkatkan
                            kapasitasnya melalui digitalisasi, transfer
                            pengetahuan, dan penguatan sistem pelaporan, agar
                            pengawasan DPR menjadi lebih responsif dan berdampak
                            nyata bagi kesejahteraan rakyat.
                          </p>
                        </div>
                        <div className="mt-8">
                          <Image
                            src="/images/dpr/bakn-2.jpg"
                            alt="Kolaborasi BAKN & BPK"
                            width={600}
                            height={400}
                            className="mx-auto rounded-xl shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {showKomdigi && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
                  <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white px-6 py-10 shadow-2xl ring-4 ring-black scrollbar-hide md:px-12 md:py-14">
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 rounded-full bg-gray-200 px-3 py-1 text-sm text-black transition hover:bg-gray-400"
                      onClick={() => setshowKomdigi(false)}
                    >
                      ✕
                    </button>

                    {/* Header */}
                    <div className="mb-10 text-center">
                      <h1 className="mb-3 text-4xl font-extrabold text-blue-700">
                        Komunikasi dan Informatika
                      </h1>
                      <p className="text-lg font-medium text-gray-600">
                        Pilar Kemajuan Bangsa di Era Global
                      </p>
                    </div>

                    {/* Tabs */}
                    <div className="mb-6 flex flex-wrap justify-center gap-3 border-b pb-2 text-sm font-medium text-gray-700">
                      {[
                        ["transformasi", "Transformasi"],
                        ["Sinergi", "Sinergi Lembaga"],
                        ["lembaga", "Lembaga Pengawas"],
                        ["efisiensi", "Efisiensi"],
                      ].map(([tabId, label]) => (
                        <button
                          key={tabId}
                          className={`rounded-lg px-4 py-2 capitalize transition ${
                            activeTab === tabId
                              ? "bg-blue-700 text-white shadow"
                              : "bg-gray-100 hover:bg-gray-200"
                          }`}
                          onClick={() => setActiveTab(tabId)}
                        >
                          {label}
                        </button>
                      ))}
                    </div>

                    {/* Content */}
                    <div className="space-y-5 text-justify text-sm leading-relaxed text-gray-800 md:text-base">
                      {activeTab === "transformasi" && (
                        <>
                          <p>
                            <strong>
                              Transformasi Digital dan Komunikasi sebagai Pilar
                              Kemajuan
                            </strong>
                          </p>
                          <p>
                            Di era globalisasi dan revolusi digital,
                            transformasi dalam bidang komunikasi membawa
                            perubahan yang signifikan bagi seluruh aspek
                            kehidupan. Digitalisasi telah membuka peluang baru
                            dalam pemerataan informasi, pendidikan, bisnis, dan
                            pemerintahan, sehingga mendorong percepatan
                            pembangunan di berbagai daerah. Infrastruktur
                            digital yang merata sangat penting untuk menjawab
                            tantangan modern, terutama agar setiap wilayah, tak
                            terkecuali daerah-daerah yang masih mengalami blank
                            spot, dapat menikmati kemajuan teknologi dan
                            informasi.
                          </p>
                          <Image
                            src="/images/dpr/komdigi-1.jpg"
                            alt="Transformasi Digital"
                            width={600}
                            height={400}
                            className="mx-auto rounded-xl shadow-lg"
                          />
                        </>
                      )}

                      {activeTab === "Sinergi" && (
                        <>
                          <p>
                            <strong>
                              Sinergi antara Pemerintah dan Kementerian Komdigi
                            </strong>
                          </p>
                          <p>
                            DPR RI mendorong Kementerian Komunikasi dan Digital
                            (Komdigi) untuk mewujudkan pemerataan digitalisasi
                            di seluruh daerah. Baik yang berada di pusat maupun
                            pinggiran, mendapatkan akses teknologi yang sama.
                            Langkah ini sangat penting mengingat seluruh sektor
                            masyarakat saat ini bergantung pada ketersediaan dan
                            kemajuan teknologi informasi.
                          </p>
                        </>
                      )}

                      {activeTab === "lembaga" && (
                        <>
                          <p>
                            <strong>
                              Peran Lembaga Pengawas dalam Menjaga Kualitas
                              Penyiaran dan Informasi
                            </strong>
                          </p>
                          <p>
                            Dalam ranah penyiaran dan informasi, beberapa
                            lembaga pengawas memainkan peran vital.
                          </p>
                          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700 md:text-base">
                            <li>
                              <strong>Komisi Penyiaran Indonesia: </strong>
                              Mengawasi tayangan yang masuk ke ruang publik,
                              memastikan konten yang disajikan tidak hanya
                              menghibur tetapi juga mendidik serta mampu
                              memerangi penyebaran informasi menyesatkan.
                            </li>
                            <li>
                              <strong>Dewan Pers: </strong>
                              Melindungi kebebasan jurnalisme dan memastikan
                              jurnalis serta wartawan terlindungi dari segala
                              bentuk intimidasi, sehingga independensi pers
                              tetap terjaga.
                            </li>
                            <li>
                              <strong>Komisi Informasi Pusat: </strong>
                              Berfokus pada peningkatan akses dan transparansi
                              informasi publik, sekaligus memastikan bahwa
                              informasi strategis dapat tersampaikan dengan
                              akurat kepada masyarakat.
                            </li>
                            <li>
                              <strong>Lembaga Sensor Film: </strong>
                              Menyaring konten yang dapat berdampak negatif,
                              menjaga nilai budaya dan moralitas dalam tayangan
                              yang disajikan kepada publik.
                            </li>
                          </ul>
                        </>
                      )}

                      {activeTab === "efisiensi" && (
                        <>
                          <p>
                            <strong>
                              Tantangan Efisiensi dan Implementasi Kebijakan
                            </strong>
                          </p>
                          <p>
                            Upaya efisiensi anggaran yang diterapkan oleh
                            pemerintah sering kali mendapatkan kritik dari
                            berbagai kalangan. Efisiensi harus dipandang sebagai
                            upaya optimalisasi sumber daya, bukan sebagai
                            pengurangan kualitas fungsi pengawasan. Secara
                            akademis, konsep “efficiency without compromise”
                            sangat relevan untuk diterapkan. Optimalisasi harus
                            dilakukan sedemikian rupa sehingga fungsi kritis
                            mereka tidak terganggu, terutama dalam menghadapi
                            tantangan penyebaran hoaks dan informasi yang tidak
                            akurat di era digital ini.
                          </p>
                          <Image
                            src="/images/dpr/komdigi-2.jpg"
                            alt="Kerja Komdigi"
                            width={600}
                            height={400}
                            className="mx-auto rounded-xl shadow-lg"
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {showKemhan && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
                  <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white px-6 py-10 shadow-2xl ring-4 ring-black scrollbar-hide md:px-12 md:py-14">
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 rounded-full bg-gray-200 px-3 py-1 text-sm text-black transition hover:bg-gray-400"
                      onClick={() => setshowKemhan(false)}
                    >
                      ✕
                    </button>

                    {/* Header */}
                    <div className="mb-10 text-center">
                      <h1 className="mb-3 text-4xl font-extrabold text-red-700">
                        PERTAHANAN & KEAMANAN NEGARA
                      </h1>
                      <p className="text-lg font-medium text-gray-600">
                        Pilar Kedaulatan di Era Modern
                      </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                      {/* Left - Gambar & Info Ringkas */}
                      <div className="space-y-8">
                        <div className="relative h-80 w-full overflow-hidden rounded-xl shadow-md">
                          <Image
                            src="/images/dpr/kemhan-2.jpg"
                            alt="Pertahanan Negara"
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="rounded-xl bg-red-100 p-6 shadow-inner">
                          <h2 className="mb-4 text-xl font-bold text-red-800">
                            Fokus Strategis
                          </h2>
                          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-800 md:text-base">
                            <li>Kesejahteraan dan keamanan prajurit TNI.</li>
                            <li>Penguatan industri pertahanan nasional.</li>
                            <li>
                              Pengembangan kepemimpinan strategis oleh
                              Lemhannas.
                            </li>
                            <li>Kolaborasi antar lembaga pertahanan.</li>
                          </ul>
                        </div>
                      </div>

                      {/* Right - Narasi Panjang */}
                      <div className="flex h-full flex-col justify-between">
                        <div className="space-y-5 text-justify text-sm leading-relaxed text-gray-800 md:text-base">
                          <p>
                            Dalam upaya mewujudkan Asta Cita Presiden RI, Komisi
                            I DPR RI fokus pada peningkatan kualitas hidup
                            prajurit TNI serta keselamatan mereka di dalam dan
                            luar negeri. Dukungan juga diberikan melalui
                            penguatan fasilitas kesehatan, pendidikan, dan
                            perumahan.
                          </p>
                          <p>
                            Industri pertahanan dalam negeri, seperti PT Pindad,
                            turut memperkuat ketahanan nasional melalui produksi
                            alat utama sistem senjata (alutsista) dan kendaraan
                            strategis.
                          </p>
                          <p>
                            Lemhannas berperan menyiapkan pemimpin strategis
                            bangsa yang tangguh dalam menghadapi tantangan
                            geopolitik dan pertahanan. Supremasi sipil tetap
                            menjadi prinsip utama.
                          </p>
                          <p>
                            Kolaborasi lembaga seperti Wantannas, BIN, Bakamla,
                            dan BSSN juga menjadi fondasi penting dalam
                            membangun sistem keamanan nasional yang resilien dan
                            adaptif terhadap ancaman masa kini.
                          </p>
                        </div>

                        <div className="mt-8">
                          <Image
                            src="/images/dpr/kemhan-1.jpg"
                            alt="Operasional TNI"
                            width={600}
                            height={400}
                            className="mx-auto rounded-xl shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {showLuar && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
                  <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white px-6 py-10 shadow-2xl ring-4 ring-black scrollbar-hide md:px-12 md:py-14">
                    {" "}
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 rounded-full bg-gray-200 px-3 py-1 text-sm text-black hover:bg-gray-400"
                      onClick={() => setshowLuar(false)}
                    >
                      ✕
                    </button>
                    {/* Title and Description */}
                    <div className="mb-8 text-center">
                      <h1 className="mb-2 text-4xl font-bold text-blue-700">
                        KEMENTERIAN LUAR NEGERI
                      </h1>
                      <p className="text-lg text-gray-700">
                        Peran Strategis dalam Merumuskan Kebijakan Luar Negeri
                        Indonesia
                      </p>
                    </div>
                    {/* Layout with Three Columns */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
                      {/* Left Column: Text Content */}
                      <div className="space-y-5 text-sm leading-relaxed text-gray-800 md:text-base">
                        <p>
                          Kementerian Luar Negeri Indonesia memiliki peran
                          strategis dalam merumuskan dan menjalankan kebijakan
                          luar negeri, menjaga kedaulatan negara, serta
                          memperkokoh hubungan bilateral maupun multilateral.
                        </p>
                        <p>
                          Dalam era globalisasi dan dinamika politik
                          internasional, Kemenlu dituntut untuk responsif
                          terhadap tantangan, seperti perlindungan WNI di luar
                          negeri dan penegakan kepentingan nasional di kancah
                          global.
                        </p>
                        <p>
                          Pengawasan DPR RI merupakan salah satu mekanisme
                          penting untuk memastikan akuntabilitas dan
                          transparansi kinerja Kemenlu. DPR melakukan evaluasi
                          penggunaan anggaran kementerian melalui rapat kerja
                          dan audit keuangan, guna memastikan dana yang
                          disalurkan sesuai dengan program strategis dan
                          prioritas nasional.
                        </p>
                      </div>

                      {/* Center Column: Key Points and Images */}
                      <div className="space-y-8">
                        <div className="relative h-56 w-full overflow-hidden rounded-xl shadow-md">
                          <Image
                            src="/images/dpr/menlu-1.jpg"
                            alt="Kemenlu Main"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="rounded-xl bg-gray-100 p-6 shadow-md">
                          <h2 className="mb-3 text-xl font-semibold text-gray-800">
                            Fokus Utama Kemenlu
                          </h2>
                          <ul className="list-disc space-y-2 pl-5 text-gray-700">
                            <li>
                              Melindungi WNI di luar negeri, termasuk pekerja
                              migran dan pelajar.
                            </li>
                            <li>
                              Menjaga hubungan internasional yang adil dan
                              saling menguntungkan.
                            </li>
                            <li>
                              Pengawasan anggaran kementerian untuk
                              transparansi.
                            </li>
                            <li>
                              Peran diplomasi dalam menghadapi tantangan global.
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Right Column: More Text Content */}
                      <div className="space-y-5 text-sm leading-relaxed text-gray-800 md:text-base">
                        <p>
                          Kemenlu bekerja sama dengan Kementerian
                          Ketenagakerjaan dan lembaga-lembaga terkait untuk
                          menyusun kesepakatan bilateral dan multilateral guna
                          menciptakan iklim kerja yang adil dan aman bagi para
                          pekerja migran. Pendekatan diplomatik dan hukum
                          internasional digunakan untuk menegosiasikan
                          perlindungan hak-hak pekerja yang berada di luar
                          negeri.
                        </p>
                        <p>
                          Para pelajar Indonesia yang menuntut ilmu di luar
                          negeri mendapat dukungan melalui jaringan perwakilan
                          diplomatik. Kemenlu memfasilitasi koordinasi dengan
                          institusi pendidikan serta lembaga perlindungan di
                          negara tujuan, sehingga isu-isu seperti perlindungan
                          hukum dan konsuler dapat segera ditangani apabila
                          terjadi permasalahan.
                        </p>
                        <p>
                          Meskipun tugas utama prajurit TNI dalam konteks
                          keamanan nasional lebih berada di bawah Kementerian
                          Pertahanan, peran Kemenlu tetap signifikan dalam
                          menjalin kerjasama pertahanan dan keamanan bilateral
                          maupun multilateral. Melalui diplomasi militer,
                          Kemenlu membantu menciptakan kerangka kerja yang
                          saling menguntungkan, di mana kepentingan dan
                          keselamatan prajurit serta personel pertahanan dapat
                          lebih terjamin dalam situasi konflik atau operasi
                          multinasional.
                        </p>
                      </div>
                    </div>
                    {/* Images Section */}
                    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                      <div className="relative h-56 w-full overflow-hidden rounded-xl shadow-lg">
                        <Image
                          src="/images/dpr/menlu-2.jpg"
                          alt="Diplomasi Kemenlu"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative h-56 w-full overflow-hidden rounded-xl shadow-lg">
                        <Image
                          src="/images/dpr/menlu-3.jpg"
                          alt="Pekerja Migran"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative h-56 w-full overflow-hidden rounded-xl shadow-lg">
                        <Image
                          src="/images/dpr/menlu-4.jpg"
                          alt="Pertemuan Diplomatik"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div
                className="absolute left-[68.4%] top-[42%] cursor-pointer"
                onClick={() => setshowBakn(true)}
              >
                <Image
                  src="/images/dpr/bakn-mobile.gif"
                  alt="BAKN"
                  width={150}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div>

              <div
                className="absolute left-[10.3%] top-[58%] cursor-pointer"
                onClick={() => setshowKomdigi(true)}
              >
                <Image
                  src="/images/dpr/KOMDIGI.png"
                  alt="Komdigi"
                  width={100}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div>

              <div
                className="absolute left-[45.3%] top-[63%] cursor-pointer"
                onClick={() => setshowKemhan(true)}
              >
                <Image
                  src="/images/dpr/KEMHAN.png"
                  alt="Kemenhan"
                  width={100}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div>

              <div
                className="absolute left-[50.3%] top-[85.5%] cursor-pointer"
                onClick={() => setshowLuar(true)}
              >
                <Image
                  src="/images/dpr/LUAR-NEGRI.png"
                  alt="Luar Negeri"
                  width={170}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div>
            </>
          ) : (
            <>
              {/* Desktop Layout */}
              {showBakn && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 transition-opacity">
                  <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white px-6 py-10 shadow-2xl ring-4 ring-black md:px-12 md:py-14">
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 rounded-full bg-gray-200 px-3 py-1 text-sm text-black transition hover:bg-gray-400"
                      onClick={() => setshowBakn(false)}
                    >
                      ✕
                    </button>

                    {/* Header */}
                    <div className="mb-10 text-center">
                      <h1 className="mb-3 text-3xl font-extrabold text-red-700">
                        BADAN AKUNTABILITAS KEUANGAN NEGARA DPR RI
                      </h1>
                      <p className="text-lg font-medium text-gray-600">
                        Pilar Penguatan Pengawasan Keuangan Negara oleh DPR RI
                      </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                      {/* Left - Foto & Info */}
                      <div className="space-y-8">
                        <div className="relative h-80 w-full overflow-hidden rounded-xl shadow-md">
                          <Image
                            src="/images/dpr/bakn-1.jpg"
                            alt="BAKN DPR"
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="rounded-xl bg-gray-100 p-6 shadow-inner">
                          <h2 className="mb-4 text-xl font-bold text-gray-800">
                            Peran dan Fungsi Utama
                          </h2>
                          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700 md:text-base">
                            <li>
                              Meningkatkan kualitas pengawasan atas pengelolaan
                              keuangan negara.
                            </li>
                            <li>
                              Menjamin akuntabilitas dan transparansi anggaran
                              negara.
                            </li>
                            <li>
                              Memfasilitasi tindak lanjut terhadap temuan audit
                              BPK.
                            </li>
                            <li>
                              Menyampaikan hasil telaah kepada Komisi-Komisi DPR
                              RI.
                            </li>
                            <li>
                              Menjadi penghubung antara hasil audit dan
                              kebijakan DPR.
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Right - Text Content */}
                      <div className="flex h-full flex-col justify-between">
                        <div className="space-y-5 text-justify text-sm leading-relaxed text-gray-800 md:text-base">
                          <p>
                            <strong>BAKN DPR RI</strong> merupakan alat
                            kelengkapan dewan yang memainkan peran penting dalam
                            memastikan bahwa pengelolaan dan pertanggungjawaban
                            keuangan negara dilakukan secara akuntabel,
                            transparan, dan efisien.
                          </p>
                          <p>
                            Dalam sinerginya bersama BPK RI, BAKN tidak hanya
                            menelaah hasil audit tetapi juga memberikan masukan
                            strategis kepada DPR sebagai dasar pengambilan
                            keputusan anggaran dan pengawasan.
                          </p>
                          <p>
                            Dengan forum kerja, kolaborasi lintas lembaga, serta
                            mekanisme umpan balik terhadap BPK, BAKN menjadi
                            kunci dalam menciptakan tata kelola keuangan negara
                            yang lebih baik.
                          </p>
                          <p>
                            Ke depan, BAKN diharapkan terus meningkatkan
                            kapasitasnya melalui digitalisasi, transfer
                            pengetahuan, dan penguatan sistem pelaporan, agar
                            pengawasan DPR menjadi lebih responsif dan berdampak
                            nyata bagi kesejahteraan rakyat.
                          </p>
                        </div>
                        <div className="mt-8">
                          <Image
                            src="/images/dpr/bakn-2.jpg"
                            alt="Kolaborasi BAKN & BPK"
                            width={600}
                            height={400}
                            className="mx-auto rounded-xl shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {showKomdigi && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
                  <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white px-6 py-10 shadow-2xl ring-4 ring-black scrollbar-hide md:px-12 md:py-14">
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 rounded-full bg-gray-200 px-3 py-1 text-sm text-black transition hover:bg-gray-400"
                      onClick={() => setshowKomdigi(false)}
                    >
                      ✕
                    </button>

                    {/* Header */}
                    <div className="mb-10 text-center">
                      <h1 className="mb-3 text-4xl font-extrabold text-blue-700">
                        Komunikasi dan Digital
                      </h1>
                      <p className="text-lg font-medium text-gray-600">
                        Pilar Kemajuan Bangsa di Era Global
                      </p>
                    </div>

                    {/* Tabs */}
                    <div className="mb-6 flex flex-wrap justify-center gap-3 border-b pb-2 text-sm font-medium text-gray-700">
                      {[
                        ["transformasi", "Transformasi"],
                        ["Sinergi", "Sinergi Lembaga"],
                        ["lembaga", "Lembaga Pengawas"],
                        ["efisiensi", "Efisiensi"],
                      ].map(([tabId, label]) => (
                        <button
                          key={tabId}
                          className={`rounded-lg px-4 py-2 capitalize transition ${
                            activeTab === tabId
                              ? "bg-blue-700 text-white shadow"
                              : "bg-gray-100 hover:bg-gray-200"
                          }`}
                          onClick={() => setActiveTab(tabId)}
                        >
                          {label}
                        </button>
                      ))}
                    </div>

                    {/* Content */}
                    <div className="space-y-5 text-justify text-sm leading-relaxed text-gray-800 md:text-base">
                      {activeTab === "transformasi" && (
                        <>
                          <p>
                            <strong>
                              Transformasi Digital dan Komunikasi sebagai Pilar
                              Kemajuan
                            </strong>
                          </p>
                          <p>
                            Di era globalisasi dan revolusi digital,
                            transformasi dalam bidang komunikasi membawa
                            perubahan yang signifikan bagi seluruh aspek
                            kehidupan. Digitalisasi telah membuka peluang baru
                            dalam pemerataan informasi, pendidikan, bisnis, dan
                            pemerintahan, sehingga mendorong percepatan
                            pembangunan di berbagai daerah. Infrastruktur
                            digital yang merata sangat penting untuk menjawab
                            tantangan modern, terutama agar setiap wilayah, tak
                            terkecuali daerah-daerah yang masih mengalami blank
                            spot, dapat menikmati kemajuan teknologi dan
                            informasi.
                          </p>
                          <Image
                            src="/images/dpr/komdigi-1.jpg"
                            alt="Transformasi Digital"
                            width={600}
                            height={400}
                            className="mx-auto rounded-xl shadow-lg"
                          />
                        </>
                      )}

                      {activeTab === "Sinergi" && (
                        <>
                          <p>
                            <strong>
                              Sinergi antara Pemerintah dan Kementerian Komdigi
                            </strong>
                          </p>
                          <p>
                            DPR RI mendorong Kementerian Komunikasi dan Digital
                            (Komdigi) untuk mewujudkan pemerataan digitalisasi
                            di seluruh daerah. Baik yang berada di pusat maupun
                            pinggiran, mendapatkan akses teknologi yang sama.
                            Langkah ini sangat penting mengingat seluruh sektor
                            masyarakat saat ini bergantung pada ketersediaan dan
                            kemajuan teknologi informasi.
                          </p>
                        </>
                      )}

                      {activeTab === "lembaga" && (
                        <>
                          <p>
                            <strong>
                              Peran Lembaga Pengawas dalam Menjaga Kualitas
                              Penyiaran dan Informasi
                            </strong>
                          </p>
                          <p>
                            Dalam ranah penyiaran dan informasi, beberapa
                            lembaga pengawas memainkan peran vital.
                          </p>
                          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700 md:text-base">
                            <li>
                              <strong>Komisi Penyiaran Indonesia: </strong>
                              Mengawasi tayangan yang masuk ke ruang publik,
                              memastikan konten yang disajikan tidak hanya
                              menghibur tetapi juga mendidik serta mampu
                              memerangi penyebaran informasi menyesatkan.
                            </li>
                            <li>
                              <strong>Dewan Pers: </strong>
                              Melindungi kebebasan jurnalisme dan memastikan
                              jurnalis serta wartawan terlindungi dari segala
                              bentuk intimidasi, sehingga independensi pers
                              tetap terjaga.
                            </li>
                            <li>
                              <strong>Komisi Informasi Pusat: </strong>
                              Berfokus pada peningkatan akses dan transparansi
                              informasi publik, sekaligus memastikan bahwa
                              informasi strategis dapat tersampaikan dengan
                              akurat kepada masyarakat.
                            </li>
                            <li>
                              <strong>Lembaga Sensor Film: </strong>
                              Menyaring konten yang dapat berdampak negatif,
                              menjaga nilai budaya dan moralitas dalam tayangan
                              yang disajikan kepada publik.
                            </li>
                          </ul>
                        </>
                      )}

                      {activeTab === "efisiensi" && (
                        <>
                          <p>
                            <strong>
                              Tantangan Efisiensi dan Implementasi Kebijakan
                            </strong>
                          </p>
                          <p>
                            Upaya efisiensi anggaran yang diterapkan oleh
                            pemerintah sering kali mendapatkan kritik dari
                            berbagai kalangan. Efisiensi harus dipandang sebagai
                            upaya optimalisasi sumber daya, bukan sebagai
                            pengurangan kualitas fungsi pengawasan. Secara
                            akademis, konsep “efficiency without compromise”
                            sangat relevan untuk diterapkan. Optimalisasi harus
                            dilakukan sedemikian rupa sehingga fungsi kritis
                            mereka tidak terganggu, terutama dalam menghadapi
                            tantangan penyebaran hoaks dan informasi yang tidak
                            akurat di era digital ini.
                          </p>
                          <Image
                            src="/images/dpr/komdigi-2.jpg"
                            alt="Kerja Komdigi"
                            width={400}
                            height={400}
                            className="mx-auto rounded-xl shadow-lg"
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {showKemhan && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 transition-opacity">
                  <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white px-6 py-10 shadow-2xl ring-4 ring-black scrollbar-hide md:px-12 md:py-14">
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 rounded-full bg-gray-200 px-3 py-1 text-sm text-black transition hover:bg-gray-400"
                      onClick={() => setshowKemhan(false)}
                    >
                      ✕
                    </button>

                    {/* Header */}
                    <div className="mb-10 text-center">
                      <h1 className="mb-3 text-4xl font-extrabold text-red-700">
                        PERTAHANAN & KEAMANAN NEGARA
                      </h1>
                      <p className="text-lg font-medium text-gray-600">
                        Pilar Kedaulatan di Era Modern
                      </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                      {/* Left - Gambar & Info Ringkas */}
                      <div className="space-y-8">
                        <div className="relative h-80 w-full overflow-hidden rounded-xl shadow-md">
                          <Image
                            src="/images/dpr/kemhan-1.jpg"
                            alt="Pertahanan Negara"
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="rounded-xl bg-red-100 p-6 shadow-inner">
                          <h2 className="mb-4 text-xl font-bold text-red-800">
                            Fokus Strategis
                          </h2>
                          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-800 md:text-base">
                            <li>Kesejahteraan dan keamanan prajurit TNI.</li>
                            <li>Penguatan industri pertahanan nasional.</li>
                            <li>
                              Pengembangan kepemimpinan strategis oleh
                              Lemhannas.
                            </li>
                            <li>Kolaborasi antar lembaga pertahanan.</li>
                          </ul>
                        </div>
                      </div>

                      {/* Right - Narasi Panjang */}
                      <div className="flex h-full flex-col justify-between">
                        <div className="space-y-5 text-justify text-sm leading-relaxed text-gray-800 md:text-base">
                          <p>
                            Dalam upaya mewujudkan Asta Cita Presiden RI, Komisi
                            I DPR RI fokus pada peningkatan kualitas hidup
                            prajurit TNI serta keselamatan mereka di dalam dan
                            luar negeri. Dukungan juga diberikan melalui
                            penguatan fasilitas kesehatan, pendidikan, dan
                            perumahan.
                          </p>
                          <p>
                            Industri pertahanan dalam negeri, seperti PT Pindad,
                            turut memperkuat ketahanan nasional melalui produksi
                            alat utama sistem senjata (alutsista) dan kendaraan
                            strategis.
                          </p>
                          <p>
                            Lemhannas berperan menyiapkan pemimpin strategis
                            bangsa yang tangguh dalam menghadapi tantangan
                            geopolitik dan pertahanan. Supremasi sipil tetap
                            menjadi prinsip utama.
                          </p>
                          <p>
                            Kolaborasi lembaga seperti Wantannas, BIN, Bakamla,
                            dan BSSN juga menjadi fondasi penting dalam
                            membangun sistem keamanan nasional yang resilien dan
                            adaptif terhadap ancaman masa kini.
                          </p>
                        </div>

                        <div className="mt-8">
                          <Image
                            src="/images/dpr/kemhan-2.jpg"
                            alt="Operasional TNI"
                            width={600}
                            height={400}
                            className="mx-auto rounded-xl shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {showLuar && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 transition-opacity">
                  <div className="hide-scrollbar relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-xl bg-white p-8 shadow-xl">
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 rounded-full bg-gray-200 px-3 py-1 text-sm text-black hover:bg-gray-400"
                      onClick={() => setshowLuar(false)}
                    >
                      ✕
                    </button>

                    {/* Title and Description */}
                    <div className="mb-8 text-center">
                      <h1 className="mb-2 text-4xl font-bold text-blue-700">
                        KEMENTERIAN LUAR NEGERI
                      </h1>
                      <p className="text-lg text-gray-700">
                        Peran Strategis dalam Merumuskan Kebijakan Luar Negeri
                        Indonesia
                      </p>
                    </div>

                    {/* Layout with Three Columns */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
                      {/* Left Column: Text Content */}
                      <div className="space-y-5 text-sm leading-relaxed text-gray-800 md:text-base">
                        <p>
                          Kementerian Luar Negeri Indonesia memiliki peran
                          strategis dalam merumuskan dan menjalankan kebijakan
                          luar negeri, menjaga kedaulatan negara, serta
                          memperkokoh hubungan bilateral maupun multilateral.
                        </p>
                        <p>
                          Dalam era globalisasi dan dinamika politik
                          internasional, Kemenlu dituntut untuk responsif
                          terhadap tantangan, seperti perlindungan WNI di luar
                          negeri dan penegakan kepentingan nasional di kancah
                          global.
                        </p>
                        <p>
                          Pengawasan DPR RI merupakan salah satu mekanisme
                          penting untuk memastikan akuntabilitas dan
                          transparansi kinerja Kemenlu. DPR melakukan evaluasi
                          penggunaan anggaran kementerian melalui rapat kerja
                          dan audit keuangan, guna memastikan dana yang
                          disalurkan sesuai dengan program strategis dan
                          prioritas nasional.
                        </p>
                      </div>

                      {/* Center Column: Key Points and Images */}
                      <div className="space-y-8">
                        <div className="relative h-56 w-full overflow-hidden rounded-xl shadow-md">
                          <Image
                            src="/images/dpr/menlu-1.jpg"
                            alt="Kemenlu Main"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="rounded-xl bg-gray-100 p-6 shadow-md">
                          <h2 className="mb-3 text-xl font-semibold text-gray-800">
                            Fokus Utama Kemenlu
                          </h2>
                          <ul className="list-disc space-y-2 pl-5 text-gray-700">
                            <li>
                              Melindungi WNI di luar negeri, termasuk pekerja
                              migran dan pelajar.
                            </li>
                            <li>
                              Menjaga hubungan internasional yang adil dan
                              saling menguntungkan.
                            </li>
                            <li>
                              Pengawasan anggaran kementerian untuk
                              transparansi.
                            </li>
                            <li>
                              Peran diplomasi dalam menghadapi tantangan global.
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Right Column: More Text Content */}
                      <div className="space-y-5 text-sm leading-relaxed text-gray-800 md:text-base">
                        <p>
                          Kemenlu bekerja sama dengan Kementerian
                          Ketenagakerjaan dan lembaga-lembaga terkait untuk
                          menyusun kesepakatan bilateral dan multilateral guna
                          menciptakan iklim kerja yang adil dan aman bagi para
                          pekerja migran. Pendekatan diplomatik dan hukum
                          internasional digunakan untuk menegosiasikan
                          perlindungan hak-hak pekerja yang berada di luar
                          negeri.
                        </p>
                        <p>
                          Para pelajar Indonesia yang menuntut ilmu di luar
                          negeri mendapat dukungan melalui jaringan perwakilan
                          diplomatik. Kemenlu memfasilitasi koordinasi dengan
                          institusi pendidikan serta lembaga perlindungan di
                          negara tujuan, sehingga isu-isu seperti perlindungan
                          hukum dan konsuler dapat segera ditangani apabila
                          terjadi permasalahan.
                        </p>
                        <p>
                          Meskipun tugas utama prajurit TNI dalam konteks
                          keamanan nasional lebih berada di bawah Kementerian
                          Pertahanan, peran Kemenlu tetap signifikan dalam
                          menjalin kerjasama pertahanan dan keamanan bilateral
                          maupun multilateral. Melalui diplomasi militer,
                          Kemenlu membantu menciptakan kerangka kerja yang
                          saling menguntungkan, di mana kepentingan dan
                          keselamatan prajurit serta personel pertahanan dapat
                          lebih terjamin dalam situasi konflik atau operasi
                          multinasional.
                        </p>
                      </div>
                    </div>

                    {/* Images Section */}
                    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                      <div className="relative h-56 w-full overflow-hidden rounded-xl shadow-lg">
                        <Image
                          src="/images/dpr/menlu-2.jpg"
                          alt="Diplomasi Kemenlu"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative h-56 w-full overflow-hidden rounded-xl shadow-lg">
                        <Image
                          src="/images/dpr/menlu-3.jpg"
                          alt="Pekerja Migran"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative h-56 w-full overflow-hidden rounded-xl shadow-lg">
                        <Image
                          src="/images/dpr/menlu-4.jpg"
                          alt="Pertemuan Diplomatik"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div
                className="absolute left-[58.3%] top-[33.5%] cursor-pointer"
                onClick={() => setshowBakn(true)}
              >
                <Image
                  src="/images/dpr/BAKN.gif"
                  alt="Profil"
                  width={180}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div>

              <div
                className="absolute left-[35.3%] top-[58.5%] cursor-pointer"
                onClick={() => setshowKomdigi(true)}
              >
                <Image
                  src="/images/dpr/KOMDIGI.png"
                  alt="komdigi"
                  width={120}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div>

              <div
                className="absolute left-[50.3%] top-[65.5%] cursor-pointer"
                onClick={() => setshowKemhan(true)}
              >
                <Image
                  src="/images/dpr/KEMHAN.png"
                  alt="kemenhan"
                  width={120}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div>

              <div
                className="absolute left-[50.3%] top-[85.5%] cursor-pointer"
                onClick={() => setshowLuar(true)}
              >
                <Image
                  src="/images/dpr/LUAR-NEGRI.png"
                  alt="Luar Negri"
                  width={170}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
