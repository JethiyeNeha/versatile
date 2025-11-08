import StatusCards from "@/components/StatusCards";
import VersatileIDCard from "@/components/VersatileIDCard";
import WalletSection from "@/components/WalletSection";
import RecentTransactions from "@/components/RecentTransactions";
import PriceInsights from "@/components/PriceInsights";
import styles from "@/styles/Dashboard.module.css";
import Header from "@/components/Header";
import GuardianCard from "@/components/GuardianCard";
import { transactions, wallet } from "@/data/card.data";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className={styles.topSection}>
          <VersatileIDCard />
          <StatusCards />
        </div>

        <div className={styles.middleSection}>
          <GuardianCard />
          <WalletSection title="Wallet" labels={wallet} />
          <WalletSection title="Transactions" labels={transactions} />
        </div>

        <div className={styles.bottomSection}>
          <RecentTransactions />
          <PriceInsights />
        </div>
      </main>
    </div>
  );
}
