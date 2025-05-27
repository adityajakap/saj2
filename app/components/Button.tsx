"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {}

const CardItem = ({
  href,
  imageSrc,
  altText,
  title,
}: {
  href: string;
  imageSrc: string;
  altText: string;
  title: string;
}) => (
  <Link href={href} className="block">
    <div className="flex flex-col overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105">
      <div className="flex aspect-square items-center justify-center bg-gray-300">
        <Image
          src={imageSrc}
          alt={altText}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
      <div className="bg-black py-2 text-center">
        <p className="text-sm font-bold text-white">{title}</p>
      </div>
    </div>
  </Link>
);

const Header: React.FC<HeaderProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMenuClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="absolute inset-x-0 top-4 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Home Button */}
        <a href="/">
          <Image
            src="/images/home-button.png"
            alt="Home Button"
            width={60}
            height={60}
            className="cursor-pointer transition-transform hover:scale-110"
          />
        </a>

        {/* Candy Box (Menu Button) */}
        <Image
          src="/images/candy-box.png"
          alt="Menu Button"
          width={60}
          height={60}
          className="cursor-pointer transition-transform hover:rotate-12"
          onClick={handleMenuClick}
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="relative mx-4 w-full max-w-4xl rounded-2xl bg-white p-6 shadow-lg">
            <button
              onClick={handleCloseModal}
              className="absolute right-2 top-2 text-xl font-bold text-gray-600 hover:text-red-500"
            >
              ✕
            </button>

            <h2 className="text-center text-xl font-bold text-gray-800">
              Jalan Pintas
            </h2>

            <div className="mt-4 grid grid-cols-3 gap-6">
              {/* 9 CardItem */}
              <CardItem
                href="/dpr"
                imageSrc="/images/dpr-1.webp"
                altText="Menu 1"
                title="DPR"
              />
              <CardItem
                href="/profil"
                imageSrc="/images/profil.webp"
                altText="Menu 2"
                title="Profil"
              />
              <CardItem
                href="/galeri"
                imageSrc="/images/galeri-1.webp"
                altText="Menu 3"
                title="Galeri"
              />
              <CardItem
                href="/berita"
                imageSrc="/images/berita-1.webp"
                altText="Menu 4"
                title="Berita"
              />
              <CardItem
                href="/suara-saj"
                imageSrc="/images/suara-saj-1.webp"
                altText="Menu 5"
                title="Suara SAJ"
              />
              <CardItem
                href="/dapil"
                imageSrc="/images/dapil-1.png"
                altText="Menu 6"
                title="Dapil"
              />
              <CardItem
                href="https://www.instagram.com/sarifahainunjariyahofficial?igsh=MWlpdGI2Y3pnMmUyZA%3D%3D&utm_source=qr"
                imageSrc="/images/instagram.png"
                altText="Menu 7"
                title="Instagram"
              />
              <CardItem
                href="/blog"
                imageSrc="/images/default.png"
                altText="Menu 8"
                title="Default"
              />
              <CardItem
                href="https://www.tiktok.com/@sarifahainunjariyah_?_t=ZS-8vqZCUnmcH2&_r=1"
                imageSrc="/images/tiktok.png"
                altText="Menu 9"
                title="Tiktok"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
