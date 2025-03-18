"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import './globals.css';

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    // Check if the device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Clean up event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-screen">
      {/* Main container with viewport dimensions */}
      <div className="relative w-screen h-screen overflow-hidden">
        {/* Container with fixed dimensions that holds both background and buildings */}
        <div 
          className="absolute" 
          style={{
            width: isMobile ? '100%' : '1920px',
            height: isMobile ? '100%' : '1080px',
            left: '50%',  
            transform: 'translateX(-50%)',
            top: '0',
          }}
        >
            {/* Background Image as part of the fixed container */}
            <div className="absolute top-0 left-0 w-full h-full">
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
              <div className="absolute top-[18%] left-[54%]">
                <Image
                src="/images/dpr.webp"
                alt="Gedung DPR"
                width={200}
                height={210}
                className="hover-outline cursor-pointer"
                priority
                />
                </div>
                
                <div className="absolute top-[2%] left-[36%]">
                <Image
                src="/images/rumah.webp"
                alt="Rumah"
                width={200}
                height={192}
                className="hover-outline cursor-pointer"
                priority
                />
                </div>
                
                <div className="absolute top-[35%] left-[36%]">
                <Image
                src="/images/galeri.webp"
                alt="Gedung Galeri"
                width={200}
                height={192}
                className="hover-outline cursor-pointer"
                priority
                />
                </div>
                
                <div className="absolute top-[27%] left-[46%]">
                <Image
                src="/images/suara-saj.webp"
                alt="Rumah NPC"
                width={200}
                height={192}
                className="hover-outline cursor-pointer"
                priority
                />
                </div>
              </>
            ) : (
                <>
                {/* Desktop Layout */}
                <div 
                  className="absolute top-[16%] left-[54%] cursor-pointer"
                  onClick={() => setShowModal(true)}
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

                {showModal && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Modal Title</h2>
                    <p className="mb-4">This is a dummy modal content.</p>
                    <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => setShowModal(false)}
                    >
                    Close
                    </button>
                  </div>
                  </div>
                )}

                <div className="absolute top-[59%] left-[55%]">
                <Image
                src="/images/rumah.webp"
                alt="Gedung DPR"
                width={280}
                height={210}
                className="hover-outline cursor-pointer"
                priority
                />
                </div>
                
                <div className="absolute top-[2%] left-[30%]">
                <Image
                src="/images/dpr.webp"
                alt="Rumah"
                width={290}
                height={192}
                className="hover-outline cursor-pointer"
                priority
                />
                </div>
                
                <div className="absolute top-[33%] left-[35%]">
                <Image
                src="/images/galeri.webp"
                alt="Gedung Galeri"
                width={280}
                height={192}
                className="hover-outline cursor-pointer"
                priority
                />
                </div>
                
                <div className="absolute top-[27%] left-[46%]">
                <Image
                src="/images/suara-saj.webp"
                alt="Rumah NPC"
                width={230}
                height={192}
                className="hover-outline cursor-pointer"
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
