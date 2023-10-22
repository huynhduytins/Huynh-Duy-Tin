import CurrentToken from "./CurrentToken";
import Token from "./Token";
import TokenInput from "./TokenInput";

interface ICoinContainer {}

const CoinContainer = () => {
  return (
    <div className="w-full">
      <p className="text-light-500 text-base mb-2 px-3">Amount to send</p>
      <div className="rounded-2xl overflow-hidden bg-white border-2 border-token-form-light dark:border-token-form-dark">
        <div className="flex justify-between gap-[1px]">
          <Token />
          <CurrentToken />
        </div>
        <TokenInput />
      </div>
    </div>
  );
};

export default CoinContainer;
