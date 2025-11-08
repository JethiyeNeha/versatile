export type ICoin = {
  id: string;
  symbol: string;
  name?: string;
  price: string;
  change?: string;
  positive?: boolean;
  icon: string;
};
export type Itransactions = {
  id: string;
  symbol: string;
  price: string;
  icon: string;
  status: string;
};
