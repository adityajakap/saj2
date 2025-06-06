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
