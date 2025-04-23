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
  const [showProfil, setshowProfil] = useState(false);
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
              src="/images/news/saj-news.gif"
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
              <div
                className="absolute left-[20%] top-[36%] cursor-pointer"
                onClick={() => setshowProfil(true)}
              >
                <Image
                  src="/images/news/semua-berita.gif"
                  alt="Gedung DPR"
                  width={420}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div>
            </>
          ) : (
            <>
              {/* Desktop Layout */}
              <div
                className="absolute left-[40.3%] top-[27.5%] cursor-pointer"
                onClick={() => setshowProfil(true)}
              >
                <Image
                  src="/images/news/semua-berita.gif"
                  alt="Profil"
                  width={400}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div>

              <div
                className="absolute left-[60.3%] top-[23.5%] cursor-pointer"
                onClick={() => setshowProfil(true)}
              >
                <Image
                  src="/images/news/teh-sarifah.png"
                  alt="Profil"
                  width={550}
                  height={210}
                  className="hover-outline"
                  priority
                />
              </div>

              <div
                className="absolute left-[10.3%] top-[60.5%] cursor-pointer"
                onClick={() => setshowProfil(true)}
              >
                <Image
                  src="/images/news/saj-1.png"
                  alt="Profil"
                  width={400}
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
