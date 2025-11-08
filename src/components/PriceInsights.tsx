import { coins } from "@/data/price-insights.data";
import Image from "next/image";
import styles from "@/styles/Dashboard.module.css";
export default function AIPriceInsights() {
  return (
    <div className={styles.gradientCard}>
      <div className="text-white">
        <div className="flex items-center gap-3 mb-10 -ml-2">
          <Image
            src="/assets/icons/insights.png"
            alt="insights"
            height={29}
            width={29}
          />
          <div className="font-medium text-[22px] leading-[100%] tracking-[0%]">
            AI Price Insights
          </div>
        </div>

        <div className="space-y-5">
          {coins.map((c) => (
            <div
              key={c.id}
              className="flex items-center justify-between bg-[#131313] rounded-xl px-5 py-4 h-[99px]"
            >
              <div className="flex items-center gap-4">
                <div>
                  <Image src={c.icon} alt="up" height={38} width={38} />
                </div>
                <div>
                  <div className="font-bold text-[18px] ">{c.symbol}</div>
                  <div className="font-normal text-[14px] text-[#8B8B8B]">
                    {c.price}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className={`flex items-center gap-2 font-medium text-[20px] leading-[100%] tracking-[0%] ${
                    c.positive ? "text-[#7BD384]" : "text-[#D37B7B]"
                  }`}
                >
                  <span>{c.change}</span>
                  {c.positive ? (
                    <Image
                      src="/assets/icons/up.png"
                      alt="up"
                      height={25}
                      width={29}
                    />
                  ) : (
                    <Image
                      src="/assets/icons/down.png"
                      alt="down"
                      height={25}
                      width={29}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 pt-10">
          <a
            href="#"
            className="inline-flex items-center gap-3 text-[18px] text-white-400 hover:underline leading-[100%] tracking-[0%]"
          >
            <Image
              src="/assets/icons/view.png"
              alt="up"
              height={18}
              width={18}
            />
            View Full Analysis
          </a>
        </div>
      </div>
    </div>
  );
}
