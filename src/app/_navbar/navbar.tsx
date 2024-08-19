"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    weekday: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="bg-[#fff]">
      <div className="flex border-b-2 border-[#ebebeb] items-center">
        <div
          className="mx-auto"
          onClick={() => router.push("/")}
          style={{ cursor: "pointer" }}
        >
          <Image
            className="hover:opacity-80 sm:w-full h-[90px] sm:h-[100px]"
            src="/headernav.png"
            alt="Daily Blockchain Ph"
            width={700}
            height={350}
            priority
          />
          <div className="hidden lg:block font-bold text-center">
            {formattedDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
