
import { transactions } from "@/data/transactions.data";
import Image from "next/image";
import styles from "@/styles/Dashboard.module.css";

export default function RecentTransactions() {
  return (
    <div className={styles.gradientCard}>
      <div className="text-white">
        <div className="flex items-center gap-3 mb-10 -ml-2">
          <Image
            src="/assets/icons/recent_transactions.png"
            alt="transactions"
            height={29}
            width={29}
          />
          <div className="font-medium text-[22px] leading-[100%] tracking-[0%]">
            Recent Transactions
          </div>
        </div>

        <div className="space-y-5 ">
          {transactions.map((c) => (
            <div
              key={c.id}
              className="flex items-center justify-between bg-[#131313] rounded-xl px-5 py-4"
            >
              <div className="flex items-center gap-4 h-[67px]">
                <div>
                  <Image src={c.icon} alt={c.symbol} height={22} width={27} />
                </div>
                <div>
                  <div className="font-bold text-[18px] ">{c.symbol}</div>
                  <div className="font-normal text-[14px] text-[#8B8B8B]">
                    {c.price}
                  </div>
                </div>
              </div>

              <Image src={c.status} alt="status" height={23} width={23} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 pt-10">
          <a
            href="#"
            className="inline-flex items-center gap-3 hover:underline"
          >
            <Image
              src="/assets/icons/all_transactions.png"
              alt="transactions"
              height={18}
              width={18}
            />
            <span className="text-[18px] text-white-400 leading-[100%] tracking-[0%]">
              See All Transactions
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
