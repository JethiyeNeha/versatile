import { stats } from "@/data/status-card.data";
import Image from "next/image";

export default function StatusCard() {
  return (
    <div
      className="rounded-[16px] p-10 text-white bg-[#000000]"
      style={{
        border: "1px solid transparent",
        borderRadius: "16px",
        backgroundImage:
          "linear-gradient(#0a0a0a, #0a0a0a), linear-gradient(90.11deg, #6F6F6F 0.1%, #4A3872 50.48%, #DE89C3 99.9%)",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
      }}
    >
      <div className="flex flex-col space-y-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-[6px] px-4 py-3 bg-[#131313] h-[51px]"
          >
            <div className="flex items-center space-x-3">
              <Image src={item.icon} alt={item.label} height={22} width={25} />
              <span className="text-white-400 text-[20px] leading-[100%] tracking-[0%]">{item.label}</span>
            </div>
            <span className="text-white-700 font-bold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
