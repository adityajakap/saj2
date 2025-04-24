"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "../globals.css";
import { Jersey_15 } from "next/font/google";
import { Dekko } from "next/font/google";
import Button from "../components/Button";

const jersey15 = Jersey_15({
  subsets: ["latin"],
  weight: ["400"],
});

const dekko = Dekko({
  subsets: ["latin"],
  weight: ["400"],
});

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showBiografi, setShowBiografi] = useState(false);
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
      <div className="flex justify-center items-center min-h-screen">
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

              {showBiografi && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                  <div
                    className="relative max-h-[90vh] overflow-y-auto rounded-lg p-4 shadow-lg scrollbar-hide"
                    style={{
                      outline: "5px solid black",
                      outlineOffset: "-3px",
                      background:
                        "linear-gradient(to bottom, white 25%, black 25%)",
                    }}
                  >
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
                    <p className="mb-6 mt-5 text-white">
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
                    <p className="mb-6 mt-5 text-justify text-white">
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
                onClick={() => setShowBiografi(true)}
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
            </>
          ) : (
            <>
              {/* Desktop Layout */}

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
                onClick={() => setShowBiografi(true)}
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
