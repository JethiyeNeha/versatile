import Image from "next/image";
import styles from "@/styles/Dashboard.module.css";
import { ICard } from "@/app/models/card.interface";
const WalletSection = ({ title, labels }: ICard) => {
  return (
    <div
      className={`${styles.cardBackground} p-6 text-white h-[200px]`}
    >
      <h2 className="mb-8 font-medium text-[22px] leading-[100%] tracking-[0%]" >{title}</h2>
      <div className="flex flex-col space-y-6">
        {labels.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <Image
              src="/assets/icons/right_arrow.png"
              alt="arrow"
              height={12}
              width={7}
            />
            <span className="text-white-400 text-md">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletSection;

