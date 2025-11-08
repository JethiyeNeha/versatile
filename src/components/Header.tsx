"use client";
import Image from "next/image";
import { useState } from "react";

export default function VersatileHeaderPage() {
  const activeLink = "Home";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white px-6 sm:px-8 md:px-[50px] pb-[30px]">
      <header>
        <div className="flex items-center justify-between py-4 md:py-6">
          <div className="flex items-center gap-3 md:pl-[50px]">
            <div>
              <Image
                src="/assets/images/logo.png"
                alt="logo"
                height={51}
                width={37}
              />
            </div>
            <div
              className="font-black text-[16px] md:text-[16px] leading-[100%] tracking-[0%]"
              style={{ fontFamily: "Orbitron" }}
            >
              VERSATILE.ID
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-bold text-[16px] md:text-[18px]">
            {["Home", "Profile"].map((link) => (
              <a key={link} className="relative py-2 px-3">
                {link}
                {activeLink === link && (
                  <span
                    className="absolute bottom-0 left-0 w-full h-[3px] rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, #4A3872 0%, #DE89C3 100%)",
                    }}
                  ></span>
                )}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-[2px] bg-white"></span>
              <span className="block w-6 h-[2px] bg-white"></span>
              <span className="block w-6 h-[2px] bg-white"></span>
            </div>
          </button>
        </div>

        <div className="border-t border-white/30" />

        {menuOpen && (
          <div className="flex flex-col items-start gap-4 py-4 md:hidden">
            {["Home", "Profile"].map((link) => (
              <a
                key={link}
                className={`relative py-1 px-2 text-[16px] font-medium ${
                  activeLink === link
                    ? "bg-gradient-to-r from-[#4A3872] to-[#DE89C3] bg-clip-text text-transparent"
                    : ""
                }`}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </header>

      <div className="mt-8 sm:mt-10">
        <span className="font-medium text-[22px] leading-[100%] tracking-[0%] text-transparent bg-clip-text bg-gradient-to-r from-white via-[#DDAFCE] to-[#684BAB]  pl-0 sm:pl-[30px] md:pl-[50px]">
          Welcome back to Versatile ID hub,
        </span>
      </div>
    </div>
  );
}
