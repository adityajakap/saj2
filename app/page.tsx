"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./globals.css";
import { Jersey_15 } from "next/font/google";
import { Dekko } from "next/font/google";
import SplashScreen from "./components/SplashScreen";

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
  const [showProfil, setshowProfil] = useState(false);
  const [showDPR, setshowDPR] = useState(false);
  const [showSAJ, setshowSAJ] = useState(false);
  const [showGallery, setshowGallery] = useState(false);
  const [showArticle, setshowArticle] = useState(false);
  const [showKunjungan, setshowKunjungan] = useState(false);
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
          <SplashScreen />;
          {/* Background Image as part of the fixed container */}
          <div className="absolute left-0 top-0 size-full">
            <Image
              src="/images/bg-yes1.gif"
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          {isMobile ? (
            <>
              {/* Mobile Layout */}

              {showDPR && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                  <div
                    className="relative rounded-lg bg-white p-6 shadow-lg"
                    style={{
                      outline: "5px solid black",
                      outlineOffset: "-3px",
                    }}
                  >
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 z-10 rounded-full bg-gray-400 px-3 py-1 text-sm text-black transition hover:bg-gray-600"
                      onClick={() => setshowDPR(false)}
                    >
                      ✕
                    </button>
                    {/* Applying the font here */}
                    <h2
                      className={`${jersey15.className} mb-4 text-center text-5xl font-bold text-white`}
                      style={{
                        textShadow:
                          "3px 3px 0 black, -3px 3px 0 black, 3px -3px 0 black, -3px -3px 0 black",
                      }}
                    >
                      DPR RI
                    </h2>
                    <div className="flex justify-center">
                      <Image
                        src="/images/dpr-1.webp"
                        alt="Profile Picture"
                        width={300}
                        height={245}
                        className=""
                        priority
                      />
                    </div>
                    <p className={`${dekko.className} mb-6`}>
                      Sebagai Anggota DPR RI, Teh Sarifah<br></br> menjabat pada
                      bagian Komisi I dan BAKN. <br></br> Anda mau masuk ke DPR
                      RI?
                    </p>
                    <div className="flex justify-center">
                      <a
                        href="/dpr"
                        className={`${jersey15.className} items-center rounded bg-teal-500 px-12 py-2 text-xl text-white outline outline-2 outline-black hover:bg-teal-600`}
                      >
                        Masuk DPR RI
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {showSAJ && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                  <div
                    className="relative rounded-lg bg-white p-6 shadow-lg"
                    style={{
                      outline: "5px solid black",
                      outlineOffset: "-3px",
                    }}
                  >
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 z-10 rounded-full bg-gray-400 px-3 py-1 text-sm text-black transition hover:bg-gray-600"
                      onClick={() => setshowSAJ(false)}
                    >
                      ✕
                    </button>
                    {/* Applying the font here */}
                    <h2
                      className={`${jersey15.className} mb-4 text-center text-5xl font-bold text-white`}
                      style={{
                        textShadow:
                          "3px 3px 0 black, -3px 3px 0 black, 3px -3px 0 black, -3px -3px 0 black",
                      }}
                    >
                      Suara SAJ
                    </h2>
                    <div className="flex justify-center">
                      <Image
                        src="/images/suara-saj-1.webp"
                        alt="Profile Picture"
                        width={300}
                        height={245}
                        className=""
                        priority
                      />
                    </div>
                    <p className={`${dekko.className} mb-6`}>
                      Suara SAJ menyampaikan kata-kata bijak Teh<br></br>
                      Sarifah yang mewakili aspirasi rakyat. <br></br>
                      Anda mau masuk Suara SAJ?
                    </p>
                    <div className="flex justify-center">
                      <a
                        href="/suara-saj"
                        className={`${jersey15.className} items-center rounded bg-teal-500 px-12 py-2 text-xl text-white outline outline-2 outline-black hover:bg-teal-600`}
                      >
                        Masuk Suara SAJ
                      </a>
                    </div>
                  </div>
                </div>
              )}
              {showGallery && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                  <div
                    className="relative rounded-lg bg-white p-6 shadow-lg"
                    style={{
                      outline: "5px solid black",
                      outlineOffset: "-3px",
                    }}
                  >
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 z-10 rounded-full bg-gray-400 px-3 py-1 text-sm text-black transition hover:bg-gray-600"
                      onClick={() => setshowGallery(false)}
                    >
                      ✕
                    </button>
                    {/* Applying the font here */}
                    <h2
                      className={`${jersey15.className} mb-4 text-center text-5xl font-bold text-white`}
                      style={{
                        textShadow:
                          "3px 3px 0 black, -3px 3px 0 black, 3px -3px 0 black, -3px -3px 0 black",
                      }}
                    >
                      Galeri
                    </h2>
                    <div className="flex justify-center">
                      <Image
                        src="/images/galeri-1.webp"
                        alt="Profile Picture"
                        width={300}
                        height={245}
                        className=""
                        priority
                      />
                    </div>
                    <p className={`${dekko.className} mb-6`}>
                      Galeri Teh Sarifah berisikan berbagai<br></br>
                      dokumentasi seperti foto-foto kegiatannya.<br></br>
                      Anda mau masuk Galeri?
                    </p>
                    <div className="flex justify-center">
                      <a
                        href="/galeri"
                        className={`${jersey15.className} items-center rounded bg-teal-500 px-12 py-2 text-xl text-white outline outline-2 outline-black hover:bg-teal-600`}
                      >
                        Masuk Galeri
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {showArticle && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                  <div
                    className="relative rounded-lg bg-white p-6 shadow-lg"
                    style={{
                      outline: "5px solid black",
                      outlineOffset: "-3px",
                    }}
                  >
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 z-10 rounded-full bg-gray-400 px-3 py-1 text-sm text-black transition hover:bg-gray-600"
                      onClick={() => setshowArticle(false)}
                    >
                      ✕
                    </button>
                    {/* Applying the font here */}
                    <h2
                      className={`${jersey15.className} mb-4 text-center text-5xl font-bold text-white`}
                      style={{
                        textShadow:
                          "3px 3px 0 black, -3px 3px 0 black, 3px -3px 0 black, -3px -3px 0 black",
                      }}
                    >
                      Berita
                    </h2>
                    <div className="flex justify-center">
                      <Image
                        src="/images/berita-1.webp"
                        alt="Profile Picture"
                        width={300}
                        height={245}
                        className=""
                        priority
                      />
                    </div>
                    <p className={`${dekko.className} mb-6`}>
                      Berita Teh Sarifah berisikan berbagai artikel <br></br>
                      mengenai kegiatan maupun berita nasional. <br></br>
                      Anda mau masuk Berita?
                    </p>
                    <div className="flex justify-center">
                      <a
                        href="/berita"
                        className={`${jersey15.className} items-center rounded bg-teal-500 px-12 py-2 text-xl text-white outline outline-2 outline-black hover:bg-teal-600`}
                      >
                        Masuk Berita
                      </a>
                    </div>
                  </div>
                </div>
              )}

              <div
                className="absolute left-[10%] top-[70%] cursor-pointer"
                onClick={() => setshowProfil(true)}
              >
                <Image
                  src="/images/rumah.webp"
                  alt="Profil"
                  width={200}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div>

              {showProfil && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                  <div
                    className="relative rounded-lg bg-white p-6 shadow-lg"
                    style={{
                      outline: "5px solid black",
                      outlineOffset: "-3px",
                    }}
                  >
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 z-10 rounded-full bg-gray-400 px-3 py-1 text-sm text-black transition hover:bg-gray-600"
                      onClick={() => setshowProfil(false)}
                    >
                      ✕
                    </button>
                    {/* Applying the font here */}
                    <h2
                      className={`${jersey15.className} mb-4 text-center text-5xl font-bold text-white`}
                      style={{
                        textShadow:
                          "3px 3px 0 black, -3px 3px 0 black, 3px -3px 0 black, -3px -3px 0 black",
                      }}
                    >
                      Profil
                    </h2>
                    <div className="flex justify-center">
                      <Image
                        src="/images/profil.webp"
                        alt="Profile Picture"
                        width={300}
                        height={245}
                        className=""
                        priority
                      />
                    </div>
                    <p className={`${dekko.className} mb-6`}>
                      Profil Teh Sarifah beserta kisah<br></br> perjalanannya
                      dari Bacaleg menjadi<br></br> Anggota DPR. Anda mau masuk
                      ke Profil?
                    </p>
                    <div className="flex justify-center">
                      <a
                        href="/profil"
                        className={`${jersey15.className} items-center rounded bg-teal-500 px-12 py-2 text-xl text-white outline outline-2 outline-black hover:bg-teal-600`}
                      >
                        Masuk Profil
                      </a>
                    </div>
                  </div>
                </div>
              )}

              <div
                className="absolute left-[55%] top-[59%]"
                onClick={() => setshowArticle(true)}
              >
                <Image
                  src="/images/berita.webp"
                  alt="Gedung DPR"
                  width={280}
                  height={210}
                  className="hover-outline cursor-pointer"
                  priority
                />
              </div>

              <div
                className="absolute left-[2%] top-[1%]"
                onClick={() => setshowDPR(true)}
              >
                <Image
                  src="/images/dpr.webp"
                  alt="Rumah"
                  width={185}
                  height={192}
                  className="hover-outline cursor-pointer"
                  priority
                />
              </div>

              <div
                className="absolute left-[10%] top-[37%]"
                onClick={() => setshowGallery(true)}
              >
                <Image
                  src="/images/galeri.webp"
                  alt="Gedung Galeri"
                  width={185}
                  height={192}
                  className="hover-outline cursor-pointer"
                  priority
                />
              </div>

              <div
                className="absolute left-[46%] top-[27%]"
                onClick={() => setshowSAJ(true)}
              >
                <Image
                  src="/images/suara-saj.webp"
                  alt="Suara SAJ"
                  width={185}
                  height={192}
                  className="hover-outline cursor-pointer"
                  priority
                />
              </div>
            </>
          ) : (
            <>
              {/* Desktop Layout */}
              {showProfil && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                  <div
                    className="relative rounded-lg bg-white p-6 shadow-lg"
                    style={{
                      outline: "5px solid black",
                      outlineOffset: "-3px",
                    }}
                  >
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 z-10 rounded-full bg-gray-400 px-3 py-1 text-sm text-black transition hover:bg-gray-600"
                      onClick={() => setshowProfil(false)}
                    >
                      ✕
                    </button>

                    {/* Applying the font here */}
                    <h2
                      className={`${jersey15.className} mb-4 text-center text-5xl font-bold text-white`}
                      style={{
                        textShadow:
                          "3px 3px 0 black, -3px 3px 0 black, 3px -3px 0 black, -3px -3px 0 black",
                      }}
                    >
                      Profil
                    </h2>
                    <div className="flex justify-center">
                      <Image
                        src="/images/profil.webp"
                        alt="Profile Picture"
                        width={300}
                        height={245}
                        className=""
                        priority
                      />
                    </div>
                    <p className={`${dekko.className} mb-6`}>
                      Profil Teh Sarifah beserta kisah<br></br> perjalanannya
                      dari Bacaleg menjadi<br></br> Anggota DPR. Anda mau masuk
                      ke Profil?
                    </p>
                    <div className="flex justify-center">
                      <a
                        href="/profil"
                        className={`${jersey15.className} items-center rounded bg-teal-500 px-12 py-2 text-xl text-white outline outline-2 outline-black hover:bg-teal-600`}
                      >
                        Masuk Profil
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {showDPR && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                  <div
                    className="relative rounded-lg bg-white p-6 shadow-lg"
                    style={{
                      outline: "5px solid black",
                      outlineOffset: "-3px",
                    }}
                  >
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 z-10 rounded-full bg-gray-400 px-3 py-1 text-sm text-black transition hover:bg-gray-600"
                      onClick={() => setshowDPR(false)}
                    >
                      ✕
                    </button>
                    {/* Applying the font here */}
                    <h2
                      className={`${jersey15.className} mb-4 text-center text-5xl font-bold text-white`}
                      style={{
                        textShadow:
                          "3px 3px 0 black, -3px 3px 0 black, 3px -3px 0 black, -3px -3px 0 black",
                      }}
                    >
                      DPR RI
                    </h2>
                    <div className="flex justify-center">
                      <Image
                        src="/images/dpr-1.webp"
                        alt="Profile Picture"
                        width={300}
                        height={245}
                        className=""
                        priority
                      />
                    </div>
                    <p className={`${dekko.className} mb-6`}>
                      Sebagai Anggota DPR RI, Teh Sarifah<br></br> menjabat pada
                      bagian Komisi I dan BAKN. <br></br> Anda mau masuk ke DPR
                      RI?
                    </p>
                    <div className="flex justify-center">
                      <a
                        href="/dpr"
                        className={`${jersey15.className} items-center rounded bg-teal-500 px-12 py-2 text-xl text-white outline outline-2 outline-black hover:bg-teal-600`}
                      >
                        Masuk DPR RI
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {showSAJ && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                  <div
                    className="relative rounded-lg bg-white p-6 shadow-lg"
                    style={{
                      outline: "5px solid black",
                      outlineOffset: "-3px",
                    }}
                  >
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 z-10 rounded-full bg-gray-400 px-3 py-1 text-sm text-black transition hover:bg-gray-600"
                      onClick={() => setshowSAJ(false)}
                    >
                      ✕
                    </button>
                    {/* Applying the font here */}
                    <h2
                      className={`${jersey15.className} mb-4 text-center text-5xl font-bold text-white`}
                      style={{
                        textShadow:
                          "3px 3px 0 black, -3px 3px 0 black, 3px -3px 0 black, -3px -3px 0 black",
                      }}
                    >
                      Suara SAJ
                    </h2>
                    <div className="flex justify-center">
                      <Image
                        src="/images/suara-saj-1.webp"
                        alt="Profile Picture"
                        width={300}
                        height={245}
                        className=""
                        priority
                      />
                    </div>
                    <p className={`${dekko.className} mb-6`}>
                      Suara SAJ menyampaikan kata-kata bijak Teh<br></br>
                      Sarifah yang mewakili aspirasi rakyat. <br></br>
                      Anda mau masuk Suara SAJ?
                    </p>
                    <div className="flex justify-center">
                      <a
                        href="/suara-saj"
                        className={`${jersey15.className} items-center rounded bg-teal-500 px-12 py-2 text-xl text-white outline outline-2 outline-black hover:bg-teal-600`}
                      >
                        Masuk SUARA SAJ
                      </a>
                    </div>
                  </div>
                </div>
              )}
              {showGallery && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                  <div
                    className="relative rounded-lg bg-white p-6 shadow-lg"
                    style={{
                      outline: "5px solid black",
                      outlineOffset: "-3px",
                    }}
                  >
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 z-10 rounded-full bg-gray-400 px-3 py-1 text-sm text-black transition hover:bg-gray-600"
                      onClick={() => setshowGallery(false)}
                    >
                      ✕
                    </button>
                    {/* Applying the font here */}
                    <h2
                      className={`${jersey15.className} mb-4 text-center text-5xl font-bold text-white`}
                      style={{
                        textShadow:
                          "3px 3px 0 black, -3px 3px 0 black, 3px -3px 0 black, -3px -3px 0 black",
                      }}
                    >
                      Galeri
                    </h2>
                    <div className="flex justify-center">
                      <Image
                        src="/images/galeri-1.webp"
                        alt="Profile Picture"
                        width={300}
                        height={245}
                        className=""
                        priority
                      />
                    </div>
                    <p className={`${dekko.className} mb-6`}>
                      Galeri Teh Sarifah berisikan berbagai<br></br>
                      dokumentasi seperti foto-foto kegiatannya.<br></br>
                      Anda mau masuk Galeri?
                    </p>
                    <div className="flex justify-center">
                      <a
                        href="/galeri"
                        className={`${jersey15.className} items-center rounded bg-teal-500 px-12 py-2 text-xl text-white outline outline-2 outline-black hover:bg-teal-600`}
                      >
                        Masuk Galeri
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {showArticle && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                  <div
                    className="relative rounded-lg bg-white p-6 shadow-lg"
                    style={{
                      outline: "5px solid black",
                      outlineOffset: "-3px",
                    }}
                  >
                    {/* Close Button */}
                    <button
                      className="absolute right-4 top-4 z-10 rounded-full bg-gray-400 px-3 py-1 text-sm text-black transition hover:bg-gray-600"
                      onClick={() => setshowArticle(false)}
                    >
                      ✕
                    </button>
                    {/* Applying the font here */}
                    <h2
                      className={`${jersey15.className} mb-4 text-center text-5xl font-bold text-white`}
                      style={{
                        textShadow:
                          "3px 3px 0 black, -3px 3px 0 black, 3px -3px 0 black, -3px -3px 0 black",
                      }}
                    >
                      Berita
                    </h2>

                    <div className="flex justify-center">
                      <Image
                        src="/images/berita-1.webp"
                        alt="Profile Picture"
                        width={300}
                        height={245}
                        className=""
                        priority
                      />
                    </div>
                    <p className={`${dekko.className} mb-6`}>
                      Berita Teh Sarifah berisikan berbagai artikel <br></br>
                      mengenai kegiatan maupun berita nasional. <br></br>
                      Anda mau masuk Berita?
                    </p>
                    <div className="flex justify-center">
                      <a
                        href="/berita"
                        className={`${jersey15.className} items-center rounded bg-teal-500 px-12 py-2 text-xl text-white outline outline-2 outline-black hover:bg-teal-600`}
                      >
                        Masuk Berita
                      </a>
                    </div>
                  </div>
                </div>
              )}

              <div
                className="absolute left-[55%] top-[50%]"
                onClick={() => setshowArticle(true)}
              >
                <Image
                  src="/images/berita.webp"
                  alt="Berita"
                  width={280}
                  height={210}
                  className="hover-outline cursor-pointer"
                  priority
                />
              </div>

              <div
                className="absolute left-[30%] top-[2%]"
                onClick={() => setshowDPR(true)}
              >
                <Image
                  src="/images/dpr.webp"
                  alt="Rumah"
                  width={290}
                  height={192}
                  className="hover-outline cursor-pointer"
                  priority
                />
              </div>

              <div
                className="absolute left-[35%] top-[33%]"
                onClick={() => setshowGallery(true)}
              >
                <Image
                  src="/images/galeri.webp"
                  alt="Gedung Galeri"
                  width={280}
                  height={192}
                  className="hover-outline cursor-pointer"
                  priority
                />
              </div>

              <div
                className="absolute left-[46%] top-[27%]"
                onClick={() => setshowSAJ(true)}
              >
                <Image
                  src="/images/suara-saj.webp"
                  alt="Suara SAJ"
                  width={230}
                  height={192}
                  className="hover-outline cursor-pointer"
                  priority
                />
              </div>

              <div
                className="absolute left-[43%] top-[69%] cursor-pointer"
                onClick={() => setshowProfil(true)}
              >
                <Image
                  src="/images/rumah.webp"
                  alt="Profil"
                  width={300}
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
