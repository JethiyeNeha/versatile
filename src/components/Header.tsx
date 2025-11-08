import Image from "next/image";

export default function VersatileHeaderPage() {
  const activeLink = "Home";
  return (
    <div className="bg-black text-white px-[50px] pb-[30px]">
      <header>
        <div className="px-[50px] py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <Image
                src="/assets/images/logo.png"
                alt="logo"
                height={51}
                width={37}
              />
            </div>
            <div
              className="font-black text-[16px] leading-[100%] tracking-[0%] align-middle"
              style={{ fontFamily: "Orbitron" }}
            >
              VERSATILE.IO
            </div>
          </div>

          <nav className="flex items-center gap-8 font-bold text-[18px] leading-[100%] tracking-[0%]">
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
        </div>
        <div className="border-t border-white" />
      </header>

      <div className="mt-3 ">
        <span className="font-medium text-[22px] leading-[100%] tracking-[0%] text-transparent bg-clip-text bg-gradient-to-r from-white via-[#DDAFCE] to-[#684BAB] pl-[50px]">
          Welcome back to Versatile ID hub,
        </span>
      </div>
    </div>
  );
}
