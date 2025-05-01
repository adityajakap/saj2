"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "../globals.css";
import Button from "../components/Button";
import Link from "next/link";

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showProfil, setshowProfil] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const updateScale = () => {
      const screenWidth = window.innerWidth;
      const scale = screenWidth / 1920; // Dihitung sesuai lebar layar
      const container = document.getElementById("scaled-container");

      if (container) {
        // Hanya melakukan scale pada transformasi
        container.style.transform = `translateX(-50%) scale(${scale})`;
      }
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

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
          id="scaled-container"
          className="absolute"
          style={{
            position: isMobile ? "absolute" : "fixed", // Untuk mobile: absolute, desktop: fixed
            width: "100%", // Untuk mobile dan desktop: 100% lebar
            height: "100%", // Untuk mobile dan desktop: 100% tinggi
            left: isMobile ? "0" : "50%", // Untuk mobile: posisikan dari kiri layar, desktop: posisikan di tengah
            top: "0", // Untuk mobile dan desktop: mulai dari atas layar
            transform: isMobile ? "none" : "translateX(-50%)", // Mobile: tanpa transformasi, desktop: terpusat
            transformOrigin: "top center", // Agar konten tetap terpusat di desktop
            marginLeft: isMobile ? "0" : "auto", // Mobile: tanpa margin, desktop: margin auto untuk terpusat
          }}
        >
          {" "}
          {/* Background Image as part of the fixed container */}
          <div className="absolute left-0 top-0 size-full">
            <Image
              src="/images/galeri/galeri-bg.gif"
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
              <Link href="/galleries">
                <div className="absolute left-[20%] top-[67%] cursor-pointer">
                  <Image
                    src="/images/galeri/show-more.png"
                    alt="Gedung DPR"
                    width={430}
                    height={210}
                    className="hover-outline"
                    priority
                  />
                </div>
              </Link>
            </>
          ) : (
            <>
              {/* Desktop Layout */}
              <Link href="/galleries">
                <div className="absolute left-[40.3%] top-[65.5%] cursor-pointer">
                  <Image
                    src="/images/galeri/show-more.png"
                    alt="Profil"
                    width={500}
                    height={210}
                    className="hover-outline"
                    priority
                  />
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
