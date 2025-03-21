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
  const [showProfil, setshowProfil] = useState(false);
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
              src="/images/profil-bg.png"
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
                className="absolute left-[54%] top-[16%] cursor-pointer"
                onClick={() => setshowProfil(true)}
              >
                <Image
                  src="/images/rumah.webp"
                  alt="Gedung DPR"
                  width={280}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div>

              {showProfil && (
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
                        onClick={() => setshowProfil(false)}
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
              {/* <div
                className="absolute left-[55.3%] top-[35.5%] cursor-pointer"
                onClick={() => setshowProfil(true)}
              >
                <Image
                  src="/images/bakn.png"
                  alt="Profil"
                  width={220}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
