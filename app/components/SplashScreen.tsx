"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Jersey_15 } from "next/font/google";

const jersey15 = Jersey_15({
  subsets: ["latin"],
  weight: ["400"],
});

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  if (typeof window !== "undefined") {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      setIsVisible(true);
      sessionStorage.setItem("hasVisited", "true");
    }
  }
}, []);


  const handleEnter = () => {
    setIsVisible(false);
    // Jika ingin menunggu animasi selesai, bisa tambahkan setTimeout di sini
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
          <img
            src="images/hooks/bg.png"
            alt="Splash Banner"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute top-20 z-20 flex flex-col items-center space-y-4">
            <h1
              className={`${jersey15.className} text-center text-4xl font-bold text-white`}
              style={{
                WebkitTextStroke: "1px black",
                color: "white",
                WebkitTextFillColor: "white",
              }}
            >
              Selamat Datang di Rumah Digital-nya
            </h1>
            <h1
              className={`${jersey15.className} text-center text-5xl font-semibold text-white`}
              style={{
                WebkitTextStroke: "1px black",
                color: "white",
                WebkitTextFillColor: "white",
              }}
            >
              Sarifah Ainun Jariyah
            </h1>
            <div className="mt-6 flex w-full flex-row items-center justify-between px-8">
              <img
                src="images/hooks/logo-pdi.png"
                alt="Logo Kiri"
                className="size-24 object-contain"
              />
              <img
                src="images/hooks/logo-dpr.png"
                alt="Logo Kanan"
                className="size-24 object-contain"
              />
            </div>
          </div>
          <img
            src="images/hooks/teh-sarifah.gif"
            alt="Loading Animation"
            className="absolute bottom-0 left-1/2 z-10 size-[42rem] translate-x-[-50%] object-contain md:size-[48rem]"
          />
          <button
            onClick={handleEnter}
            className={`${jersey15.className} absolute bottom-20 z-20 rounded-md bg-teal-500 px-6 py-3 text-base text-white outline-2 outline-offset-2 outline-black transition-all hover:bg-teal-700`}
            style={{ textShadow: "0 0 3px black, 0 0 3px black" }}
          >
            Yuk Mulai Menjelajah
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
