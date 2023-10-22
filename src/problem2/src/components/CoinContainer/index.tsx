import CurrentToken from "./CurrentToken";
import Token from "./Token";
import TokenInput from "./TokenInput";

interface ICoinContainer {
  title: string;
  token: string;
  amount: string;
  isDisable?: boolean;
  toTokenAmount?: string;
}

const CoinContainer = ({
  title,
  token,
  amount,
  isDisable,
  toTokenAmount,
}: ICoinContainer) => {
  return (
    <div className="w-full">
      <p className="text-light-500 text-base mb-2 px-3 dark:text-light-850">
        {title}
      </p>
      <div className="rounded-2xl overflow-hidden bg-white dark:nav-dark border-2 border-token-form-light dark:border-token-form-dark dark:text-light-850">
        <div className="flex justify-between gap-[1px]">
          <Token token={token} />
          <CurrentToken amount={amount} />
        </div>
        <TokenInput isDisable={isDisable} toTokenAmount={toTokenAmount} />
      </div>
    </div>
  );
};

export default CoinContainer;
