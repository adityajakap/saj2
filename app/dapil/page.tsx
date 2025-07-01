"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "../globals.css";
import Button from "../components/Button";

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showWilayah, setshowWilayah] = useState(false);
  const [showCilegon, setshowCilegon] = useState(false);
  const [showKabSerang, setshowKabSerang] = useState(false);
  const [showSerang, setshowSerang] = useState(false);
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
              src="/images/dapil/bg-1.png"
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
              {showWilayah && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
                  <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white px-6 py-10 shadow-2xl ring-4 ring-black scrollbar-hide md:px-12 md:py-14">
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 rounded-full bg-gray-200 px-3 py-1 text-sm hover:bg-gray-400"
                      onClick={() => setshowWilayah(false)}
                    >
                      ✕
                    </button>

                    {/* Header */}
                    <div className="mb-6 text-center">
                      <h1 className="mb-2 text-3xl font-extrabold text-black">
                        SELURUH WILAYAH — DAPIL BANTEN II
                      </h1>
                      <p className="mb-5 text-base text-gray-600">
                        (Kabupaten Serang, Kota Serang, dan Kota Cilegon)
                      </p>
                    </div>

                    {/* Teh Ifah Overview */}
                    <div className="mb-10 space-y-4 text-justify text-sm leading-relaxed text-gray-800 md:text-base">
                      <p>
                        <strong>Sarifah Ainun Jariyah</strong>, atau Teh Ifah,
                        dikenal sebagai anggota DPR RI dari Dapil Banten II yang
                        aktif dan dekat dengan rakyat. Ia rutin turun ke
                        Kabupaten Serang, Kota Serang, dan Kota Cilegon untuk
                        bertemu langsung warga, menyerap aspirasi dari petani,
                        nelayan, buruh, pedagang pasar, mahasiswa, hingga
                        komunitas ibu-ibu senam.
                      </p>
                      <p>
                        Kehadirannya di tengah masyarakat bukan hanya
                        seremonial. Teh Ifah kerap berdialog langsung,
                        mendengarkan keluhan dan kebutuhan rakyat, lalu
                        menyuarakannya di parlemen sebagai dasar penyusunan
                        kebijakan. Ia juga aktif mengunjungi DPC partai di tiap
                        daerah untuk memperkuat sinergi politik dari akar
                        rumput.
                      </p>
                      <p>
                        Dengan pendekatan yang merakyat dan konsisten, Teh Ifah
                        menunjukkan bahwa wakil rakyat sejati adalah mereka yang
                        hadir, mendengar, dan bekerja untuk rakyat.
                      </p>
                    </div>

                    {/* Grid Wilayah */}
                    <div className="grid gap-8 md:grid-cols-3">
                      {/* Kabupaten Serang */}
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800">
                          1. Kabupaten Serang
                        </h2>
                        <div className="relative h-40 w-full overflow-hidden rounded-xl shadow-md">
                          <Image
                            src="/images/dapil/dokumentasi/kab-serang.jpg"
                            alt="Kabupaten Serang"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Kota Serang */}
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800">
                          2. Kota Serang
                        </h2>
                        <div className="relative h-40 w-full overflow-hidden rounded-xl shadow-md">
                          <Image
                            src="/images/dapil/dokumentasi/kota-serang.jpg"
                            alt="Kota Serang"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Kota Cilegon */}
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800">
                          3. Kota Cilegon
                        </h2>
                        <div className="relative h-40 w-full overflow-hidden rounded-xl shadow-md">
                          <Image
                            src="/images/dapil/dokumentasi/cilegon.jpg"
                            alt="Kota Cilegon"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {showCilegon && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
                  <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white px-6 py-10 shadow-2xl ring-4 ring-black scrollbar-hide md:px-12 md:py-14">
                    {" "}
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 rounded-full bg-gray-200 px-3 py-1 text-sm hover:bg-gray-400"
                      onClick={() => setshowCilegon(false)}
                    >
                      ✕
                    </button>
                    {/* Header */}
                    <div className="mb-6 text-center">
                      <h1 className="text-2xl font-extrabold text-black">
                        KOTA CILEGON
                      </h1>
                      <p className="text-gray-600">
                        Kegiatan Teh Ifah bersama masyarakat Cilegon
                      </p>
                    </div>
                    {/* Konten */}
                    <div className="space-y-6 text-sm leading-relaxed text-gray-800 md:text-base">
                      <p>
                        <strong>Sarifah Ainun Jariyah</strong> (Teh Ifah),
                        anggota DPR RI dari Dapil Banten II, dikenal aktif
                        menyapa dan mendengarkan warga Kota Cilegon. Ia rutin
                        berkunjung ke masyarakat dan menemui Mahasiswa.
                      </p>

                      <ul className="list-disc space-y-2 pl-5">
                        <li>
                          Bersama ibu-ibu Kota Cilegon dalam kegiatan sosial dan
                          komunitas.
                        </li>
                        <li>
                          Menyerap aspirasi warga Kota Cilegon secara langsung.
                        </li>
                        <li>
                          Menjadi <em>Keynote Speaker</em> pada Dies Natalis
                          GMNI Kota Cilegon.
                        </li>
                      </ul>

                      {/* Foto-foto */}
                      <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
                        <div className="relative h-40 w-full overflow-hidden rounded-xl shadow-md">
                          <Image
                            src="/images/dapil/dokumentasi/cilegon.jpg"
                            alt="Bersama Ibu-ibu"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative h-40 w-full overflow-hidden rounded-xl shadow-md">
                          <Image
                            src="/images/dapil/dokumentasi/gmni.png"
                            alt="Dies Natalis GMNI"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {showSerang && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
                  <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white px-6 py-10 shadow-2xl ring-4 ring-black scrollbar-hide md:px-12 md:py-14">
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 rounded-full bg-gray-200 px-3 py-1 text-sm hover:bg-gray-400"
                      onClick={() => setshowSerang(false)}
                    >
                      ✕
                    </button>
                    {/* Header */}
                    <div className="text-center">
                      <h1 className="text-2xl font-bold text-black">
                        KOTA SERANG
                      </h1>
                      <p className="text-gray-600">
                        Kedekatan Teh Ifah dengan warga kota, bukan sekadar
                        formalitas
                      </p>
                    </div>
                    {/* Narasi Langsung */}
                    <div className="mt-5 space-y-4 text-sm leading-relaxed text-gray-800 md:text-base">
                      <p>
                        <strong>Sarifah Ainun Jariyah (Teh Ifah)</strong>,
                        anggota DPR RI dari Dapil Banten II, dikenal dekat
                        dengan warga Kota Serang. Ia rutin turun ke
                        lapangan—menyambangi pasar, sekolah, kampung, dan
                        komunitas—untuk mendengar langsung cerita dan keluhan
                        masyarakat.
                      </p>
                      <p>
                        Teh Ifah sering ikut senam pagi bareng ibu-ibu, ngobrol
                        santai dengan pedagang pasar, mahasiswa, dan anak-anak
                        muda, serta berdiskusi dengan pelaku UMKM soal kebutuhan
                        usaha mereka. Ia hadir bukan untuk formalitas, tapi
                        karena peduli.
                      </p>
                      <p>
                        Aspirasi yang disampaikan warga Kota Serang dibawa Teh
                        Ifah ke Senayan, diperjuangkan lewat kebijakan yang
                        menyentuh langsung kebutuhan rakyat: pendidikan,
                        kesehatan, ekonomi rakyat, dan fasilitas umum.
                      </p>
                    </div>
                    {/* Horizontal Scroll Gallery */}
                    <div>
                      <h2 className="mb-3 text-lg font-semibold text-black">
                        Galeri Kegiatan
                      </h2>
                      <div className="flex gap-4 overflow-x-auto pb-4">
                        {[
                          {
                            src: "/images/dapil/dokumentasi/danrem-064.jpg",
                            alt: "Bersama Danrem 064",
                          },
                          {
                            src: "/images/dapil/dokumentasi/dandim-0602.jpg",
                            alt: "Bersama Dandim 0602",
                          },
                          {
                            src: "/images/dapil/dokumentasi/ketua-dpc.jpg",
                            alt: "Bersama DPC Kota Serang",
                          },
                          {
                            src: "/images/dapil/dokumentasi/warga.jpg",
                            alt: "Warga Kota Serang mendengarkan Teh Ifah",
                          },
                        ].map((img, idx) => (
                          <div
                            key={idx}
                            className="relative h-40 min-w-[250px] shrink-0 overflow-hidden rounded-xl shadow-md"
                          >
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Callout Box */}
                    <div className="rounded-xl bg-yellow-50 p-6 shadow-inner">
                      <h3 className="text-md mb-2 font-semibold text-yellow-700">
                        Fokus Perjuangan Teh Ifah di Kota Serang:
                      </h3>
                      <ul className="list-disc space-y-1 pl-5 text-sm text-gray-800">
                        <li>
                          Peningkatan layanan pendidikan dan sekolah inklusif.
                        </li>
                        <li>
                          Dukungan terhadap pelaku UMKM kota dan perempuan
                          pelaku usaha.
                        </li>
                        <li>
                          Pembenahan pasar rakyat dan ruang publik ramah
                          keluarga.
                        </li>
                        <li>
                          Penguatan koordinasi bersama aparat dan komunitas
                          warga.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {showKabSerang && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
                  <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white px-6 py-10 shadow-2xl ring-4 ring-black scrollbar-hide md:px-12 md:py-14">
                    {" "}
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 rounded-full bg-gray-200 px-3 py-1 text-sm hover:bg-gray-400"
                      onClick={() => setshowKabSerang(false)}
                    >
                      ✕
                    </button>
                    {/* Header */}
                    <div className="text-center">
                      <h1 className="text-3xl font-bold text-black">
                        KABUPATEN SERANG
                      </h1>
                      <p className="mb-5 text-gray-600">
                        Langkah nyata Teh Ifah di tengah masyarakat Serang
                      </p>
                    </div>
                    {/* Grid: Left Text | Right Image Cards */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      {/* Left - Narasi */}
                      <div className="space-y-5 text-sm leading-relaxed text-gray-800 md:text-base">
                        <p>
                          <strong>Teh Ifah</strong>, anggota DPR RI dari Dapil
                          Banten II, konsisten hadir di berbagai wilayah
                          Kabupaten Serang. Ia aktif mengunjungi desa, pasar,
                          dan sentra pertanian untuk menyapa rakyat dan menyerap
                          aspirasi.
                        </p>
                        <p>
                          Ia tidak sekadar hadir, tetapi turut berdialog dengan
                          petani, menyapa pedagang pasar, ikut senam dengan
                          ibu-ibu, hingga berdiskusi dengan pemuda dan
                          mahasiswa.
                        </p>
                        <p>
                          Semua aspirasi dibawa ke DPR RI dan diperjuangkan
                          dalam bentuk kebijakan—dari pertanian, pendidikan,
                          UMKM, hingga infrastruktur. Ia juga menjaga sinergi
                          politik dengan DPC & PAC PDI Perjuangan di Serang.
                        </p>
                      </div>

                      {/* Right - Foto Cards */}
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          {
                            src: "/images/dapil/dokumentasi/petani.png",
                            alt: "Bersama Petani MSP",
                          },
                          {
                            src: "/images/dapil/dokumentasi/ms-cikande.png",
                            alt: "Masyarakat Cikande",
                          },
                          {
                            src: "/images/dapil/dokumentasi/psr-cikande.png",
                            alt: "Pasar Cikande",
                          },
                          {
                            src: "/images/dapil/dokumentasi/senam.png",
                            alt: "Senam Ibu-ibu",
                          },
                          {
                            src: "/images/dapil/dokumentasi/dpc.jpg",
                            alt: "Tiga Pilar Partai",
                          },
                        ].map((img, idx) => (
                          <div
                            key={idx}
                            className="relative h-36 w-full overflow-hidden rounded-xl shadow-md"
                          >
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Highlight Box */}
                    <div className="mt-5 rounded-xl bg-red-50 p-6 text-sm text-gray-800 shadow-inner md:text-base">
                      <h2 className="mb-2 text-lg font-semibold text-black">
                        Fokus Teh Ifah di Kabupaten Serang:
                      </h2>
                      <ul className="list-disc space-y-2 pl-5">
                        <li>
                          Peningkatan kesejahteraan petani dan akses pupuk.
                        </li>
                        <li>Dukungan pada UMKM dan pedagang pasar.</li>
                        <li>
                          Pemberdayaan perempuan dan kegiatan komunitas ibu-ibu.
                        </li>
                        <li>Peningkatan infrastruktur desa dan irigasi.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              <div
                className="absolute bottom-0 left-[40.4%] cursor-pointer"
                onClick={() => setshowWilayah(true)}
              >
                <Image
                  src="/images/dapil/semua-wilayah.gif"
                  alt="BAKN"
                  width={130}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div>

              <div
                className="absolute bottom-0 left-[10.3%] cursor-pointer"
                onClick={() => setshowCilegon(true)}
              >
                <Image
                  src="/images/dapil/cilegon.png"
                  alt="Komdigi"
                  width={100}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div>

              <div
                className="absolute left-0 top-[11.9%] cursor-pointer"
                onClick={() => setshowSerang(true)}
                style={{ opacity: 0 }}
              >
                <Image
                  src="/images/dapil/serang.png"
                  alt="Kemenhan"
                  width={170}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div>

              <div
                className="absolute left-[70.3%] top-[20.5%] cursor-pointer"
                onClick={() => setshowKabSerang(true)}
              >
                <Image
                  src="/images/dapil/kab-serang-1.png"
                  alt="Luar Negeri"
                  width={110}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div>
            </>
          ) : (
            <>
              {/* Desktop Layout */}
              {showWilayah && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity">
                  <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl">
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 rounded-full bg-gray-200 px-3 py-1 text-sm hover:bg-gray-400"
                      onClick={() => setshowWilayah(false)}
                    >
                      ✕
                    </button>

                    {/* Header */}
                    <div className="mb-6 text-center">
                      <h1 className="mb-2 text-3xl font-extrabold text-black">
                        SELURUH WILAYAH — DAPIL BANTEN II
                      </h1>
                      <p className="text-base text-gray-600">
                        (Kabupaten Serang, Kota Serang, dan Kota Cilegon)
                      </p>
                    </div>

                    {/* Teh Ifah Overview */}
                    <div className="mb-10 space-y-4 text-justify text-sm leading-relaxed text-gray-800 md:text-base">
                      <p>
                        <strong>Sarifah Ainun Jariyah</strong>, atau Teh Ifah,
                        dikenal sebagai anggota DPR RI dari Dapil Banten II yang
                        aktif dan dekat dengan rakyat. Ia rutin turun ke
                        Kabupaten Serang, Kota Serang, dan Kota Cilegon untuk
                        bertemu langsung warga, menyerap aspirasi dari petani,
                        nelayan, buruh, pedagang pasar, mahasiswa, hingga
                        komunitas ibu-ibu senam.
                      </p>
                      <p>
                        Kehadirannya di tengah masyarakat bukan hanya
                        seremonial. Teh Ifah kerap berdialog langsung,
                        mendengarkan keluhan dan kebutuhan rakyat, lalu
                        menyuarakannya di parlemen sebagai dasar penyusunan
                        kebijakan. Ia juga aktif mengunjungi DPC partai di tiap
                        daerah untuk memperkuat sinergi politik dari akar
                        rumput.
                      </p>
                      <p>
                        Dengan pendekatan yang merakyat dan konsisten, Teh Ifah
                        menunjukkan bahwa wakil rakyat sejati adalah mereka yang
                        hadir, mendengar, dan bekerja untuk rakyat.
                      </p>
                    </div>

                    {/* Grid Wilayah */}
                    <div className="grid gap-8 md:grid-cols-3">
                      {/* Kabupaten Serang */}
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800">
                          1. Kabupaten Serang
                        </h2>
                        <div className="relative h-40 w-full overflow-hidden rounded-xl shadow-md">
                          <Image
                            src="/images/dapil/dokumentasi/kab-serang.jpg"
                            alt="Kabupaten Serang"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Kota Serang */}
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800">
                          2. Kota Serang
                        </h2>
                        <div className="relative h-40 w-full overflow-hidden rounded-xl shadow-md">
                          <Image
                            src="/images/dapil/dokumentasi/kota-serang.jpg"
                            alt="Kota Serang"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Kota Cilegon */}
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800">
                          3. Kota Cilegon
                        </h2>
                        <div className="relative h-40 w-full overflow-hidden rounded-xl shadow-md">
                          <Image
                            src="/images/dapil/dokumentasi/cilegon.jpg"
                            alt="Kota Cilegon"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {showCilegon && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity">
                  <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl">
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 rounded-full bg-gray-200 px-3 py-1 text-sm hover:bg-gray-400"
                      onClick={() => setshowCilegon(false)}
                    >
                      ✕
                    </button>

                    {/* Header */}
                    <div className="mb-6 text-center">
                      <h1 className="text-2xl font-extrabold text-black">
                        KOTA CILEGON
                      </h1>
                      <p className="text-gray-600">
                        Kegiatan Teh Ifah bersama masyarakat Cilegon
                      </p>
                    </div>

                    {/* Konten */}
                    <div className="space-y-6 text-sm leading-relaxed text-gray-800 md:text-base">
                      <p>
                        <strong>Sarifah Ainun Jariyah</strong> (Teh Ifah),
                        anggota DPR RI dari Dapil Banten II, dikenal aktif
                        menyapa dan mendengarkan warga Kota Cilegon. Ia rutin
                        berkunjung ke masyarakat dan menemui Mahasiswa.
                      </p>

                      <ul className="list-disc space-y-2 pl-5">
                        <li>
                          Bersama ibu-ibu Kota Cilegon dalam kegiatan sosial dan
                          komunitas.
                        </li>
                        <li>
                          Menyerap aspirasi warga Kota Cilegon secara langsung.
                        </li>
                        <li>
                          Menjadi <em>Keynote Speaker</em> pada Dies Natalis
                          GMNI Kota Cilegon.
                        </li>
                      </ul>

                      {/* Foto-foto */}
                      <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
                        <div className="relative h-40 w-full overflow-hidden rounded-xl shadow-md">
                          <Image
                            src="/images/dapil/dokumentasi/cilegon.jpg"
                            alt="Bersama Ibu-ibu"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative h-40 w-full overflow-hidden rounded-xl shadow-md">
                          <Image
                            src="/images/dapil/dokumentasi/gmni.png"
                            alt="Dies Natalis GMNI"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {showSerang && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity">
                  <div className="relative max-h-[90vh] w-full max-w-5xl space-y-6 overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl">
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 rounded-full bg-gray-200 px-3 py-1 text-sm hover:bg-gray-400"
                      onClick={() => setshowSerang(false)}
                    >
                      ✕
                    </button>

                    {/* Header */}
                    <div className="text-center">
                      <h1 className="text-2xl font-bold text-black">
                        KOTA SERANG
                      </h1>
                      <p className="text-gray-600">
                        Kedekatan Teh Ifah dengan warga kota, bukan sekadar
                        formalitas
                      </p>
                    </div>

                    {/* Narasi Langsung */}
                    <div className="space-y-4 text-sm leading-relaxed text-gray-800 md:text-base">
                      <p>
                        <strong>Sarifah Ainun Jariyah (Teh Ifah)</strong>,
                        anggota DPR RI dari Dapil Banten II, dikenal dekat
                        dengan warga Kota Serang. Ia rutin turun ke
                        lapangan—menyambangi pasar, sekolah, kampung, dan
                        komunitas—untuk mendengar langsung cerita dan keluhan
                        masyarakat.
                      </p>
                      <p>
                        Teh Ifah sering ikut senam pagi bareng ibu-ibu, ngobrol
                        santai dengan pedagang pasar, mahasiswa, dan anak-anak
                        muda, serta berdiskusi dengan pelaku UMKM soal kebutuhan
                        usaha mereka. Ia hadir bukan untuk formalitas, tapi
                        karena peduli.
                      </p>
                      <p>
                        Aspirasi yang disampaikan warga Kota Serang dibawa Teh
                        Ifah ke Senayan, diperjuangkan lewat kebijakan yang
                        menyentuh langsung kebutuhan rakyat: pendidikan,
                        kesehatan, ekonomi rakyat, dan fasilitas umum.
                      </p>
                    </div>

                    {/* Horizontal Scroll Gallery */}
                    <div>
                      <h2 className="mb-3 text-lg font-semibold text-black">
                        Galeri Kegiatan
                      </h2>
                      <div className="flex gap-4 overflow-x-auto pb-4">
                        {[
                          {
                            src: "/images/dapil/dokumentasi/danrem-064.jpg",
                            alt: "Bersama Danrem 064",
                          },
                          {
                            src: "/images/dapil/dokumentasi/dandim-0602.jpg",
                            alt: "Bersama Dandim 0602",
                          },
                          {
                            src: "/images/dapil/dokumentasi/ketua-dpc.jpg",
                            alt: "Bersama DPC Kota Serang",
                          },
                          {
                            src: "/images/dapil/dokumentasi/warga.jpg",
                            alt: "Warga Kota Serang mendengarkan Teh Ifah",
                          },
                        ].map((img, idx) => (
                          <div
                            key={idx}
                            className="relative h-40 min-w-[250px] shrink-0 overflow-hidden rounded-xl shadow-md"
                          >
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Callout Box */}
                    <div className="rounded-xl bg-yellow-50 p-6 shadow-inner">
                      <h3 className="text-md mb-2 font-semibold text-yellow-700">
                        Fokus Perjuangan Teh Ifah di Kota Serang:
                      </h3>
                      <ul className="list-disc space-y-1 pl-5 text-sm text-gray-800">
                        <li>
                          Peningkatan layanan pendidikan dan sekolah inklusif.
                        </li>
                        <li>
                          Dukungan terhadap pelaku UMKM kota dan perempuan
                          pelaku usaha.
                        </li>
                        <li>
                          Pembenahan pasar rakyat dan ruang publik ramah
                          keluarga.
                        </li>
                        <li>
                          Penguatan koordinasi bersama aparat dan komunitas
                          warga.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {showKabSerang && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity">
                  <div className="relative flex max-h-[90vh] w-full max-w-6xl flex-col gap-8 overflow-y-auto rounded-2xl bg-white p-10 shadow-2xl">
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 rounded-full bg-gray-200 px-3 py-1 text-sm hover:bg-gray-400"
                      onClick={() => setshowKabSerang(false)}
                    >
                      ✕
                    </button>

                    {/* Header */}
                    <div className="text-center">
                      <h1 className="text-3xl font-bold text-black">
                        KABUPATEN SERANG
                      </h1>
                      <p className="text-gray-600">
                        Langkah nyata Teh Ifah di tengah masyarakat Serang
                      </p>
                    </div>

                    {/* Grid: Left Text | Right Image Cards */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      {/* Left - Narasi */}
                      <div className="space-y-5 text-sm leading-relaxed text-gray-800 md:text-base">
                        <p>
                          <strong>Teh Ifah</strong>, anggota DPR RI dari Dapil
                          Banten II, konsisten hadir di berbagai wilayah
                          Kabupaten Serang. Ia aktif mengunjungi desa, pasar,
                          dan sentra pertanian untuk menyapa rakyat dan menyerap
                          aspirasi.
                        </p>
                        <p>
                          Ia tidak sekadar hadir, tetapi turut berdialog dengan
                          petani, menyapa pedagang pasar, ikut senam dengan
                          ibu-ibu, hingga berdiskusi dengan pemuda dan
                          mahasiswa.
                        </p>
                        <p>
                          Semua aspirasi dibawa ke DPR RI dan diperjuangkan
                          dalam bentuk kebijakan—dari pertanian, pendidikan,
                          UMKM, hingga infrastruktur. Ia juga menjaga sinergi
                          politik dengan DPC & PAC PDI Perjuangan di Serang.
                        </p>
                      </div>

                      {/* Right - Foto Cards */}
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          {
                            src: "/images/dapil/dokumentasi/petani.png",
                            alt: "Bersama Petani MSP",
                          },
                          {
                            src: "/images/dapil/dokumentasi/ms-cikande.png",
                            alt: "Masyarakat Cikande",
                          },
                          {
                            src: "/images/dapil/dokumentasi/psr-cikande.png",
                            alt: "Pasar Cikande",
                          },
                          {
                            src: "/images/dapil/dokumentasi/senam.png",
                            alt: "Senam Ibu-ibu",
                          },
                          {
                            src: "/images/dapil/dokumentasi/dpc.jpg",
                            alt: "Tiga Pilar Partai",
                          },
                        ].map((img, idx) => (
                          <div
                            key={idx}
                            className="relative h-36 w-full overflow-hidden rounded-xl shadow-md"
                          >
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Highlight Box */}
                    <div className="rounded-xl bg-red-50 p-6 text-sm text-gray-800 shadow-inner md:text-base">
                      <h2 className="mb-2 text-lg font-semibold text-black">
                        Fokus Teh Ifah di Kabupaten Serang:
                      </h2>
                      <ul className="list-disc space-y-2 pl-5">
                        <li>
                          Peningkatan kesejahteraan petani dan akses pupuk.
                        </li>
                        <li>Dukungan pada UMKM dan pedagang pasar.</li>
                        <li>
                          Pemberdayaan perempuan dan kegiatan komunitas ibu-ibu.
                        </li>
                        <li>Peningkatan infrastruktur desa dan irigasi.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              <div
                className="absolute bottom-0 left-[40.3%] cursor-pointer"
                onClick={() => setshowWilayah(true)}
              >
                <Image
                  src="/images/dapil/semua-wilayah.gif"
                  alt="teh sarifah kebaya merah"
                  width={180}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div>

              <div
                className="absolute bottom-0 left-[30.3%] cursor-pointer"
                onClick={() => setshowCilegon(true)}
              >
                <Image
                  src="/images/dapil/cilegon.png"
                  alt="cilegon bola"
                  width={120}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div>

              <div
                className="absolute left-[36.3%] top-[10%] cursor-pointer"
                onClick={() => setshowSerang(true)}
                style={{ opacity: 0 }}
              >
                <Image
                  src="/images/dapil/serang.png"
                  alt="serang"
                  width={220}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div>

              <div
                className="absolute left-[54%] top-[14.5%] cursor-pointer"
                onClick={() => setshowKabSerang(true)}
              >
                <Image
                  src="/images/dapil/kab-serang-1.png"
                  alt="Luar Negri"
                  width={150}
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
