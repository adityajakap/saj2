"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "../globals.css";
import { Jersey_15 } from "next/font/google";
import { Dekko } from "next/font/google";

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
  const [showDPR, setshowDPR] = useState(false);
  const [showSAJ, setshowSAJ] = useState(false);
  const [showGallery, setshowGallery] = useState(false);
  const [showArticle, setshowArticle] = useState(false);
  const [showKunjungan, setshowKunjungan] = useState(false);

  useEffect(() => {
    // Check if the device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Clean up event listener
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

          {isMobile ? (
            <>
              {/* Mobile Layout */}
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

              {showBiografi && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                  <div
                    className="rounded-lg bg-white p-6 shadow-lg"
                    style={{
                      outline: "5px solid black",
                      outlineOffset: "-3px",
                    }}
                  >
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
                    {/* <div className="flex justify-center">
                      <Image
                        src="/images/profil.webp"
                        alt="Profile Picture"
                        width={300}
                        height={245}
                        className=""
                        priority
                      />
                    </div> */}
                    <p className={`${dekko.className} mb-6`}>
                      Profil Teh Sarifah beserta kisah<br></br> perjalanannya
                      dari Bacaleg menjadi<br></br> Anggota DPR. Anda mau masuk
                      ke Profil?
                    </p>
                    <div className="flex justify-center">
                      <button
                        className={`${jersey15.className} items-center rounded bg-teal-500 px-12 py-2 text-xl text-white outline outline-2 outline-black hover:bg-teal-600`}
                        onClick={() => setShowBiografi(false)}
                      >
                        Masuk Profil
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* <div className="absolute left-[55%] top-[59%]">
                <Image
                  src="/images/rumah.webp"
                  alt="Gedung DPR"
                  width={280}
                  height={210}
                  className="hover-outline cursor-pointer"
                  priority
                />
              </div>

              <div className="absolute left-[30%] top-[2%]">
                <Image
                  src="/images/dpr.webp"
                  alt="Rumah"
                  width={290}
                  height={192}
                  className="hover-outline cursor-pointer"
                  priority
                />
              </div>

              <div className="absolute left-[35%] top-[33%]">
                <Image
                  src="/images/galeri.webp"
                  alt="Gedung Galeri"
                  width={280}
                  height={192}
                  className="hover-outline cursor-pointer"
                  priority
                />
              </div> */}
              {/* 
              <div className="absolute left-[46%] top-[27%]">
                <Image
                  src="/images/suara-saj.webp"
                  alt="Suara SAJ"
                  width={230}
                  height={192}
                  className="hover-outline cursor-pointer"
                  priority
                />
              </div> */}
            </>
          ) : (
            <>
              {/* Desktop Layout */}

              {showBiografi && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                  <div
                    className="scrollbar-hide relative max-h-[90vh] overflow-y-auto rounded-lg p-4 shadow-lg"
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
