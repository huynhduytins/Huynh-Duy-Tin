interface IWalletRow {
  className?: string;
  amount: number;
  usdValue: number;
  formattedAmount: string;
}

const WalletRow = ({
  amount,
  formattedAmount,
  usdValue,
  className,
}: IWalletRow) => {
  return <div></div>;
};

export default WalletRow;
