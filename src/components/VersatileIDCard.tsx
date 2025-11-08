import Image from "next/image";

export default function VersatileIDCard() {
  return (
<div
      className="rounded-[26px] py-6 pl-12 pr-6 text-white bg-black h-[264px] flex flex-col justify-between [box-shadow:inset_-10px_10px_20px_rgba(0,0,0,0.8),inset_10px_-10px_15px_rgba(255,255,255,0.1)]"
  style={{
    border: "1px solid transparent",
    borderRadius: "26px",
    backgroundImage: `
      linear-gradient(#0a0a0a, #0a0a0a), /* inner solid background */
      linear-gradient(90.11deg, #28143B 0.11%, #671F68 99.91%) /* border gradient */
    `,
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    position: "relative",
    overflow: "hidden",
  }}
>
  <div
    style={{
      position: "absolute",
      inset: 0,
      borderRadius: "inherit",
      background:
        "radial-gradient(circle at 8% 92%, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.06) 8%, rgba(255,255,255,0) 30%)",
      pointerEvents: "none",
      zIndex: 0,
    }}
  />
      <div className="flex justify-between items-center">
        <div className="font-normal text-[13px] leading-[100%] tracking-[-2%] font-mono">
          Secured by L4 | Versatile ID
        </div>
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          height={37}
          width={26}
          className="opacity-[0.43]"
        />
      </div>
      <div className="mt-8 ">
        <div className="text-[14px] text-white-400 font-normal leading-[100%] tracking-[0%]">
          W3ID
        </div>
        <div className="font-normal text-[32px] leading-[100%] tracking-[20%] font-mono mt-4 mb-10">
          3673&nbsp;4154&nbsp;8578
        </div>
      </div>
      <div className="flex justify-between items-center text-sm">
        <span className="font-normal text-[14px] leading-[100%] tracking-[-2%] font-mono">
          Isha Edlabadkar
        </span>
        <span className="ont-extrabold text-[11px] leading-[100%] tracking-[0%] text-center align-middle font-orbitron">
          VERSATILE.ID
        </span>
      </div>
    </div>
  );
}
