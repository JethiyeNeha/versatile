import { Coin } from "@/app/models/coin.interface";

export const transactions: Coin[] = [
  {
    id: "avax",
    symbol: "0.5 AVAX",
    price: "To: 0x1234_5687",
    icon: "/assets/icons/to_transaction.png",
    status: "/assets/icons/checkmark.png",
  },
  {
    id: "usdc",
    symbol: "1000 USDC",
    price: "From: 0x1234_5687",
    icon: "/assets/icons/from_transaction.png",
    status: "/assets/icons/waiting_clock.png",
  },
  {
    id: "usdt",
    symbol: "25 USDT",
    price: "To: 0x1234_5687",
    icon: "/assets/icons/to_transaction.png",
    status: "/assets/icons/wrong.png",
  },
];
