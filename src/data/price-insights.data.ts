import { Coin } from "@/app/models/coin.interface";

export const coins: Coin[] = [
  {
    id: "avax",
    symbol: "AVAX",
    name: "Avalanche",
    price: "$42.15",
    change: "+5.2%",
    positive: true,
    icon: "/assets/icons/avax.png",
  },
  {
    id: "btc",
    symbol: "BTC",
    name: "Bitcoin",
    price: "$65,420",
    change: "-2.1%",
    positive: false,
    icon: "/assets/icons/btc_icon.png",
  },
  {
    id: "eth",
    symbol: "ETH",
    name: "Ethereum",
    price: "$3,240",
    change: "+3.8%",
    positive: true,
    icon: "/assets/icons/ethIcon.png",
  },
];