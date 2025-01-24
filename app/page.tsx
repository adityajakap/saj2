"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import FormSection from "./components/FormSection";
import NavbarPage from "./components/Navbar";

const page = () => {
  return (
    <div>
      <NavbarPage />
      <section className="relative bg-[url('/images/bg.webp')] bg-cover bg-center">
        <div className="mx-auto max-w-fit px-2 py-24 text-center lg:py-56">
          <h2 className="mb-1 text-left text-2xl font-extrabold leading-none tracking-tight text-white md:text-3xl lg:text-4xl">
            Selamat Datang di RUMAH DIGITAL-NYA
          </h2>
          <p className="mb-1 mr-4 text-left text-sm font-normal text-white sm:max-w-[25%] lg:text-base">
            Selamat datang, terima kasih sudah mau berkunjung. Saya teh Sarifah
            Ainun Jariyah selaku pemilik rumah digital ini ingin menambah
            literasi digital melalui aktivitas-aktivitas saya yang bersifat
            edukatif dan positif.
          </p>
          <div className="flex flex-col space-y-0 sm:ml-0 sm:flex-row sm:items-start sm:justify-start sm:space-y-0 sm:pl-0">
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-teal-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-teal-800 focus:ring-4 focus:ring-black dark:focus:ring-teal-900"
            >
              Yuk Mulai Menjelajah
              <svg
                className="ms-2 size-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="w-90 lg:w-82 absolute bottom-0 right-0 mr-32 size-80 h-auto sm:mr-8 md:mr-32">
          <Image
            src="/images/teh-sarifah.webp"
            alt="Teh Sarifah"
            tabIndex={0}
            role="button"
            layout="intrinsic"
            width={800}
            height={810}
            className="sm:relative sm:bottom-auto sm:right-auto sm:mr-0"
          />
        </div>
      </section>
      <div className="mt-6 flex w-full items-center justify-center">
        <div
          className="relative overflow-hidden rounded-lg shadow-lg"
          style={{ width: "2560px", height: "852px" }}
        >
          <Image
            src="/images/bg6-2.webp" // Replace with your image path
            alt="Your Image"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute left-[10%] top-[35.9%]">
            <Image
              src="/images/dpr.webp"
              alt="Gedung DPR"
              className="hover-outline cursor-pointer object-cover"
              tabIndex={0}
              role="button"
              layout="intrinsic"
              width={350}
              height={303}
              priority
            />
          </div>
          <div className="absolute left-[23%] top-[17.9%]">
            <Image
              src="/images/rumah.webp"
              alt="Rumah"
              className="hover-outline cursor-pointer object-cover"
              tabIndex={0}
              role="button"
              layout="intrinsic"
              width={320}
              height={303}
              priority
            />
          </div>
          <div className="absolute left-[32%] top-[40.9%]">
            <Image
              src="/images/galeri.webp"
              alt="Gedung Galeri"
              className="hover-outline cursor-pointer object-cover"
              tabIndex={0}
              role="button"
              layout="intrinsic"
              width={320}
              height={303}
              priority
            />
          </div>
          <div className="absolute left-[51%] top-[6.9%]">
            <Image
              src="/images/suara-saj.webp"
              alt="Rumah NPC"
              className="hover-outline cursor-pointer object-cover"
              tabIndex={0}
              role="button"
              layout="intrinsic"
              width={310}
              height={303}
              priority
            />
          </div>
          <div className="absolute left-[41%] top-[28%]">
            <Image
              src="/images/rumah-kuning.webp"
              alt="Rumah NPC"
              className="object-cover"
              tabIndex={0}
              role="button"
              layout="intrinsic"
              width={320}
              height={303}
              priority
            />
          </div>
          <div className="absolute left-[21%] top-[62.9%]">
            <Image
              src="/images/rumah-npc.webp"
              alt="Rumah NPC"
              className="object-cover"
              tabIndex={0}
              role="button"
              layout="intrinsic"
              width={320}
              height={303}
              priority
            />
          </div>
        </div>
      </div>
      <FormSection />
    </div>
  );
};

export default page;
