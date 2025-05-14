"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "../globals.css";
import Button from "../components/Button";

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showBiografi, setShowBiografi] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);
  const [showPerjalanan, setShowPerjalanan] = useState(false);
  const [showFokus, setShowFokus] = useState(false);
  const [showVisi, setShowVisi] = useState(false);

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
              src="/images/profil-bg1.png"
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

              {showFokus && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
                  <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white px-6 py-10 shadow-2xl ring-4 ring-black scrollbar-hide md:px-12 md:py-14">
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 rounded-full bg-gray-400 px-3 py-1 text-sm text-black hover:bg-gray-500"
                      onClick={() => setShowFokus(false)}
                    >
                      X
                    </button>

                    <h2 className="mb-6 text-center text-2xl font-extrabold text-gray-800">
                      FOKUS KERJA DI DAERAH PEMILIHAN
                    </h2>

                    <p className="mb-8 text-center text-gray-700">
                      Sebagai wakil rakyat dari Dapil Banten II, Teh Sarifah
                      berkomitmen untuk:
                    </p>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      {/* Card 1 */}
                      <div className="rounded-lg border border-gray-300 p-6 shadow-md transition-shadow hover:shadow-lg">
                        <h3 className="mb-2 text-xl font-semibold text-indigo-700">
                          1. Peningkatan Digitalisasi
                        </h3>
                        <p className="text-justify text-gray-700">
                          Upaya meningkatkan akses masyarakat terhadap teknologi
                          digital dan konektivitas internet. Program ini
                          mencakup penyediaan infrastruktur internet yang lebih
                          merata, terutama di daerah terpencil, peningkatan
                          literasi digital masyarakat, dan penguatan kemampuan
                          masyarakat untuk menggunakan teknologi dalam
                          pendidikan, pekerjaan, dan pelayanan publik.
                        </p>
                      </div>

                      {/* Card 2 */}
                      <div className="rounded-lg border border-gray-300 p-6 shadow-md transition-shadow hover:shadow-lg">
                        <h3 className="mb-2 text-xl font-semibold text-indigo-700">
                          2. Pengembangan UMKM melalui Digital
                        </h3>
                        <p className="text-justify text-gray-700">
                          Pemberdayaan UMKM melalui teknologi digital untuk
                          memperluas pasar melalui e-commerce, meningkatkan
                          efisiensi operasional, serta memberikan pelatihan dan
                          pendampingan. Termasuk juga akses ke fintech dan
                          promosi UMKM melalui kampanye digital yang efektif.
                        </p>
                      </div>
                    </div>

                    <div className="mt-10 text-center text-gray-800">
                      <p>
                        Teh Sarifah aktif turun ke lapangan untuk mendengar
                        langsung aspirasi masyarakat di Banten. Baginya, semua
                        persoalan bermuara pada pentingnya pendidikan yang
                        berkualitas.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {showPerjalanan && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
                  <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white px-6 py-10 shadow-2xl ring-4 ring-black scrollbar-hide md:px-12 md:py-14">
                    {/* Close Button */}
                    <button
                      className="absolute right-2 top-2 rounded-full bg-gray-400 px-3 py-1 text-sm text-black hover:bg-gray-500"
                      onClick={() => setShowPerjalanan(false)}
                    >
                      X
                    </button>

                    <h2 className="mb-2 text-center text-lg font-bold text-black">
                      PERJALANAN KARIER POLITIK
                    </h2>

                    <div className="mb-5 flex justify-center">
                      <Image
                        src="/images/biografi-1.png"
                        alt="Teh Sarifah"
                        width={300}
                        height={245}
                        priority
                      />
                    </div>

                    <p className="mb-6 text-justify text-black">
                      Teh Sarifah memulai karier politiknya sebagai anggota DPRD
                      Kabupaten Penajam Paser Utara, Kalimantan Timur, pada
                      periode 2009–2014. Namun, ia sempat vakum dari dunia
                      politik setelah menikah dan hamil pada tahun 2015.
                      <br />
                      <br />
                      Pada tahun yang sama, ia melahirkan bayi kembar tiga yang
                      sayangnya meninggal dunia. Setahun kemudian, pada 2016,
                      Teh Sarifah kembali melahirkan bayi kembar tiga yang kini
                      tumbuh sehat. Selama masa vakum tersebut, ia fokus menjadi
                      ibu rumah tangga dan menjalankan usaha.
                      <br />
                      <br />
                      Pada tahun 2019, semangatnya untuk terjun kembali ke dunia
                      politik tak dapat dibendung. PDI Perjuangan memberikan
                      kesempatan baginya untuk menjadi calon anggota legislatif
                      pada Pemilu 2024. Pilihannya pada PDI Perjuangan didorong
                      oleh kekagumannya kepada Ketua Umum PDI Perjuangan,
                      Megawati Soekarnoputri.
                    </p>
                  </div>
                </div>
              )}

              {showBiografi && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
                  <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white px-6 py-10 shadow-2xl ring-4 ring-black scrollbar-hide md:px-12 md:py-14">
                    {/* Close Button */}
                    <button
                      className="absolute right-2 top-2 rounded-full bg-gray-400 px-3 py-1 text-sm text-black hover:bg-gray-500"
                      onClick={() => setShowBiografi(false)}
                    >
                      X
                    </button>

                    {/* Applying the font here */}
                    <h2 className={`text-lg font-bold text-black`}>
                      SARIFAH AINUN JARIYAH
                    </h2>

                    <h2 className={`mb-4 text-sm font-bold text-black`}>
                      Anggota DPR RI Periode 2024–2029 <br />
                      Politisi PDI Perjuangan
                    </h2>

                    <div className="flex justify-center">
                      <Image
                        src="/images/biografi-1.png"
                        alt="Profile Picture"
                        width={300}
                        height={245}
                        className=""
                        priority
                      />
                    </div>
                    <p className="mb-6 mt-5 text-black">
                      <span className="font-light">
                        <strong className="font-bold">Tanggal Lahir:</strong>{" "}
                        <br />
                        23 April 1987 <br />
                        <br />
                        <strong className="font-bold">
                          Tempat Lahir:
                        </strong>{" "}
                        <br />
                        Balikpapan, Indonesia <br />
                        <br />
                        <strong className="font-bold">
                          Daerah Pemilihan:
                        </strong>{" "}
                        <br />
                        Banten II (Kota Serang, Kabupaten Serang, <br />
                        Kota Cilegon) <br />
                        <br />
                        <strong className="font-bold">Komisi DPR:</strong>{" "}
                        <br />
                        Komisi I (Bidang Pertahanan, Luar Negeri, <br />
                        Komunikasi, dan Informatika)
                      </span>
                    </p>
                    <div className="flex justify-center">
                      <Image
                        src="/images/profil-2.png"
                        alt="Profile Picture"
                        width={300}
                        height={245}
                        className=""
                        priority
                      />
                    </div>
                    <p className="mb-6 mt-5 text-justify text-black">
                      Sarifah Ainun Jariyah, yang akrab disapa
                      <br />
                      Teh Sarifah, adalah seorang politisi <br />
                      Indonesia dari Partai Demokrasi Indonesia
                      <br />
                      Perjuangan (PDI Perjuangan). Pada
                      <br /> Pemilihan Umum Legislatif 2024, Ia berhasil <br />{" "}
                      meraih 83.150 suara di Daerah Pemilihan Banten II,
                      <br /> yang meliputi Kota Serang, Kabupaten Serang, <br />
                      dan Kota Cilegon.
                      <br /> Saat ini, ia bertugas di Komisi I DPR RI.
                    </p>
                  </div>
                </div>
              )}
              {showVisi && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
                  <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white px-6 py-10 shadow-2xl ring-4 ring-black scrollbar-hide md:px-12 md:py-14">
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 rounded-full bg-gray-400 px-3 py-1 text-sm text-black hover:bg-gray-500"
                      onClick={() => setShowVisi(false)}
                    >
                      X
                    </button>

                    <div className="flex flex-col items-center text-center">
                      <h2 className="mb-4 text-3xl font-extrabold text-indigo-800">
                        VISI & DEDIKASI
                      </h2>

                      <Image
                        src="/images/kunjungan.png" // Ganti sesuai nama file gambarnya
                        alt="Teh Sarifah Visi"
                        width={280}
                        height={240}
                        className="mb-6 rounded-lg shadow-lg"
                        priority
                      />

                      <p className="max-w-2xl text-lg leading-relaxed text-gray-800">
                        Dengan latar belakang yang kuat dalam dunia politik
                        serta pengalaman pribadi yang mendalam,
                        <span className="font-semibold text-indigo-700">
                          {" "}
                          Sarifah Ainun Jariyah
                        </span>{" "}
                        memiliki visi untuk membawa
                        <span className="font-semibold">
                          {" "}
                          perubahan positif
                        </span>{" "}
                        bagi masyarakat Banten. Ia berkomitmen terhadap
                        kebijakan yang{" "}
                        <span className="font-semibold text-indigo-700">
                          inovatif, inklusif
                        </span>
                        , dan berpihak pada kepentingan rakyat.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div
                className="absolute left-[48%] top-[35%] cursor-pointer"
                onClick={() => setShowBiografi(true)}
              >
                <Image
                  src="/images/biografi.gif"
                  alt="Gedung DPR"
                  width={260}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div>

              <div
                className="absolute left-[6%] top-[53%] cursor-pointer"
                onClick={() => setShowVisi(true)}
              >
                <Image
                  src="/images/laptop.png"
                  alt="Gedung DPR"
                  width={120}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div>

              <div
                className="absolute left-[2.9%] top-[22.3%] cursor-pointer"
                onClick={() => setShowFokus(true)}
              >
                <Image
                  src="/images/fokus-kerja.png"
                  alt="Profil"
                  width={80}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div>

              <div
                className="absolute left-[40%] top-[19.3%] cursor-pointer"
                onClick={() => setShowPerjalanan(true)}
              >
                <Image
                  src="/images/perjalanan-karir.png"
                  alt="Profil"
                  width={80}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div>
            </>
          ) : (
            <>
              {/* Desktop Layout */}

              {showVisi && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
                  <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-gradient-to-br from-white via-indigo-50 to-white p-10 shadow-2xl">
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 rounded-full bg-gray-400 px-3 py-1 text-sm text-black hover:bg-gray-500"
                      onClick={() => setShowVisi(false)}
                    >
                      X
                    </button>

                    <div className="flex flex-col items-center text-center">
                      <h2 className="mb-4 text-3xl font-extrabold text-indigo-800">
                        VISI & DEDIKASI
                      </h2>

                      <Image
                        src="/images/kunjungan.png" // Ganti sesuai nama file gambarnya
                        alt="Teh Sarifah Visi"
                        width={280}
                        height={240}
                        className="mb-6 rounded-lg shadow-lg"
                        priority
                      />

                      <p className="max-w-2xl text-lg leading-relaxed text-gray-800">
                        Dengan latar belakang yang kuat dalam dunia politik
                        serta pengalaman pribadi yang mendalam,
                        <span className="font-semibold text-indigo-700">
                          {" "}
                          Sarifah Ainun Jariyah
                        </span>{" "}
                        memiliki visi untuk membawa
                        <span className="font-semibold">
                          {" "}
                          perubahan positif
                        </span>{" "}
                        bagi masyarakat Banten. Ia berkomitmen terhadap
                        kebijakan yang{" "}
                        <span className="font-semibold text-indigo-700">
                          inovatif, inklusif
                        </span>
                        , dan berpihak pada kepentingan rakyat.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {showFokus && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity">
                  <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-xl bg-white p-10 shadow-xl">
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 rounded-full bg-gray-400 px-3 py-1 text-sm text-black hover:bg-gray-500"
                      onClick={() => setShowFokus(false)}
                    >
                      X
                    </button>

                    <h2 className="mb-6 text-center text-2xl font-extrabold text-gray-800">
                      FOKUS KERJA DI DAERAH PEMILIHAN
                    </h2>

                    <p className="mb-8 text-center text-gray-700">
                      Sebagai wakil rakyat dari Dapil Banten II, Teh Sarifah
                      berkomitmen untuk:
                    </p>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      {/* Card 1 */}
                      <div className="rounded-lg border border-gray-300 p-6 shadow-md transition-shadow hover:shadow-lg">
                        <h3 className="mb-2 text-xl font-semibold text-indigo-700">
                          1. Peningkatan Digitalisasi
                        </h3>
                        <p className="text-justify text-gray-700">
                          Upaya meningkatkan akses masyarakat terhadap teknologi
                          digital dan konektivitas internet. Program ini
                          mencakup penyediaan infrastruktur internet yang lebih
                          merata, terutama di daerah terpencil, peningkatan
                          literasi digital masyarakat, dan penguatan kemampuan
                          masyarakat untuk menggunakan teknologi dalam
                          pendidikan, pekerjaan, dan pelayanan publik.
                        </p>
                      </div>

                      {/* Card 2 */}
                      <div className="rounded-lg border border-gray-300 p-6 shadow-md transition-shadow hover:shadow-lg">
                        <h3 className="mb-2 text-xl font-semibold text-indigo-700">
                          2. Pengembangan UMKM melalui Digital
                        </h3>
                        <p className="text-justify text-gray-700">
                          Pemberdayaan UMKM melalui teknologi digital untuk
                          memperluas pasar melalui e-commerce, meningkatkan
                          efisiensi operasional, serta memberikan pelatihan dan
                          pendampingan. Termasuk juga akses ke fintech dan
                          promosi UMKM melalui kampanye digital yang efektif.
                        </p>
                      </div>
                    </div>

                    <div className="mt-10 text-center text-gray-800">
                      <p>
                        Teh Sarifah aktif turun ke lapangan untuk mendengar
                        langsung aspirasi masyarakat di Banten. Baginya, semua
                        persoalan bermuara pada pentingnya pendidikan yang
                        berkualitas.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {showPerjalanan && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity">
                  <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl">
                    {/* Close Button */}
                    <button
                      className="absolute right-2 top-2 rounded-full bg-gray-400 px-3 py-1 text-sm text-black hover:bg-gray-500"
                      onClick={() => setShowPerjalanan(false)}
                    >
                      X
                    </button>

                    <h2 className="mb-2 text-center text-lg font-bold text-black">
                      PERJALANAN KARIER POLITIK
                    </h2>

                    <div className="mb-5 flex justify-center">
                      <Image
                        src="/images/biografi-1.png"
                        alt="Teh Sarifah"
                        width={300}
                        height={245}
                        priority
                      />
                    </div>

                    <p className="mb-6 text-justify text-black">
                      Teh Sarifah memulai karier politiknya sebagai anggota DPRD
                      Kabupaten Penajam Paser Utara, Kalimantan Timur, pada
                      periode 2009–2014. Namun, ia sempat vakum dari dunia
                      politik setelah menikah dan hamil pada tahun 2015.
                      <br />
                      <br />
                      Pada tahun yang sama, ia melahirkan bayi kembar tiga yang
                      sayangnya meninggal dunia. Setahun kemudian, pada 2016,
                      Teh Sarifah kembali melahirkan bayi kembar tiga yang kini
                      tumbuh sehat. Selama masa vakum tersebut, ia fokus menjadi
                      ibu rumah tangga dan menjalankan usaha.
                      <br />
                      <br />
                      Pada tahun 2019, semangatnya untuk terjun kembali ke dunia
                      politik tak dapat dibendung. PDI Perjuangan memberikan
                      kesempatan baginya untuk menjadi calon anggota legislatif
                      pada Pemilu 2024. Pilihannya pada PDI Perjuangan didorong
                      oleh kekagumannya kepada Ketua Umum PDI Perjuangan,
                      Megawati Soekarnoputri.
                    </p>
                  </div>
                </div>
              )}

              {showBiografi && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 transition-opacity">
                  <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl ring-4 ring-black md:p-12">
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 rounded-full bg-gray-400 px-3 py-1 text-sm text-black transition hover:bg-gray-600"
                      onClick={() => setShowBiografi(false)}
                    >
                      ✕
                    </button>

                    {/* Header */}
                    <div className="mb-10 text-center">
                      <h1 className="mb-2 text-4xl font-extrabold text-red-700">
                        SARIFAH AINUN JARIYAH
                      </h1>
                      <p className="text-lg font-semibold text-gray-700">
                        Anggota DPR RI Periode 2024–2029
                        <br />
                        Politisi PDI Perjuangan
                      </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
                      {/* Left - Foto & Info */}
                      <div className="space-y-6">
                        <div className="relative h-80 w-full overflow-hidden rounded-xl shadow-md">
                          <Image
                            src="/images/biografi-1.png"
                            alt="Sarifah Ainun Jariyah"
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Polaroid-style photos */}
                        <div className="flex gap-6">
                          {/* Polaroid 1 */}
                          <div className="w-[140px]  -rotate-3 rounded-sm bg-white p-2 pb-6 shadow-lg">
                            <Image
                              src="/images/kunjungan.png"
                              alt="Kunjungan"
                              width={140}
                              height={140}
                              className="h-auto w-full object-cover"
                            />
                            <p className="mt-2 text-center text-sm font-semibold text-gray-700">
                              Kunjungan
                            </p>
                          </div>

                          {/* Polaroid 2 */}
                          <div className="w-[140px] rotate-2 rounded-sm bg-white p-2 pb-6 shadow-lg">
                            <Image
                              src="/images/sosialisasi.png"
                              alt="Sosialisasi"
                              width={140}
                              height={140}
                              className="h-auto w-full object-cover"
                            />
                            <p className="mt-2 text-center text-sm font-semibold text-gray-700">
                              Sosialisasi
                            </p>
                          </div>
                        </div>

                        {/* Kartu Info */}
                        <div className="space-y-3 rounded-xl border-l-4 border-red-600 bg-gray-100 p-6 text-sm shadow-inner md:text-base">
                          <p>
                            <strong className="text-gray-800">
                              Tanggal Lahir:
                            </strong>{" "}
                            23 April 1987
                          </p>
                          <p>
                            <strong className="text-gray-800">
                              Tempat Lahir:
                            </strong>{" "}
                            Balikpapan, Indonesia
                          </p>
                          <p>
                            <strong className="text-gray-800">Dapil:</strong>{" "}
                            Banten II (Kota Serang, Kabupaten Serang, Kota
                            Cilegon)
                          </p>
                          <p>
                            <strong className="text-gray-800">
                              Komisi DPR:
                            </strong>{" "}
                            Komisi I (Pertahanan, Luar Negeri, Komunikasi,
                            Informatika)
                          </p>
                        </div>
                      </div>

                      {/* Right - Biodata Text */}
                      <div className="flex h-full flex-col justify-between">
                        <div className="space-y-4 text-justify text-sm leading-relaxed text-gray-800 md:text-base">
                          <p>
                            <strong>Sarifah Ainun Jariyah</strong>, yang akrab
                            disapa <strong>Teh Sarifah</strong>, adalah seorang
                            politisi Indonesia dari{" "}
                            <strong>PDI Perjuangan</strong>. Pada Pemilihan Umum
                            Legislatif 2024, ia berhasil meraih{" "}
                            <strong className="text-red-600">
                              83.150 suara
                            </strong>{" "}
                            di Daerah Pemilihan <strong>Banten II</strong>, yang
                            meliputi Kota Serang, Kabupaten Serang, dan Kota
                            Cilegon. Saat ini, ia bertugas di{" "}
                            <strong>Komisi I DPR RI</strong>, yang menangani
                            bidang pertahanan, luar negeri, komunikasi, dan
                            informatika.
                          </p>
                        </div>

                        <div className="mt-6">
                          <Image
                            src="/images/profil-2.png"
                            alt="Sarifah in DPR"
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
              <div
                className="absolute left-[47.3%] top-[28.5%] cursor-pointer"
                onClick={() => setShowBiografi(true)}
              >
                <Image
                  src="/images/biografi.gif"
                  alt="Profil"
                  width={350}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div>

              <div
                className="absolute left-[37.3%] top-[50.5%] cursor-pointer"
                onClick={() => setShowVisi(true)}
              >
                <Image
                  src="/images/laptop.png"
                  alt="Profil"
                  width={200}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div>

              <div
                className="absolute left-[34.9%] top-[19.3%] cursor-pointer"
                onClick={() => setShowFokus(true)}
              >
                <Image
                  src="/images/fokus-kerja.png"
                  alt="Profil"
                  width={120}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div>

              <div
                className="absolute left-[45.9%] top-[19.3%] cursor-pointer"
                onClick={() => setShowPerjalanan(true)}
              >
                <Image
                  src="/images/perjalanan-karir.png"
                  alt="Profil"
                  width={120}
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
