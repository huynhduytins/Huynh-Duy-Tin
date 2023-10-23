// source code only uses this interface with blockchain key
export type WalletBalance = Omit<FormattedWalletBalance, "formatted"> & {
  blockchain: string;
};

export interface FormattedWalletBalance {
  currency: string;
  amount: number;
  formatted: string;
}

// Because I dot not know where this type comes from, I declare it to the code doesn't give an error
export interface BoxProps {
  children: string;
  [key: string]: string;
}
