import styles from "@/styles/Dashboard.module.css";
export default function GuardianCard() {
  return (
    <div className={`${styles.cardBackground} h-[200px] p-6 text-white`}>
      <h2 className="mb-6 font-medium text-[22px] leading-[100%] tracking-[0%]">Guardian</h2>

      <div className="flex flex-col gap-3 items-center justify-center">
        <button className="rounded-[9px] bg-[linear-gradient(90deg,_#684BAB_0%,_#671F68_100%)] py-2 font-medium text-white-500 hover:opacity-90 transition text-white cursor-pointer h-[37px] w-[232px]">
          Setup Guardian
        </button>

        <button className="rounded-[9px] bg-[linear-gradient(90deg,_#684BAB_0%,_#671F68_100%)] py-2 font-medium text-white-500 hover:opacity-90 transition cursor-pointer h-[37px] w-[232px]">
          View Active Guardian
        </button>
      </div>
    </div>
  );
}
