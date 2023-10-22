import CoinContainer from "../CoinContainer";
import SwapButton from "../Button/SwapButton";
import SubmitButton from "../Button/SubmitButton";

const Form = () => {
  return (
    <div className="basis-1/3 min-w-[380px] max-sm:basis-11/12 bg-white dark:nav-dark rounded-2xl p-5 h-[650px] min-h-[600px] mt-[72px] flex flex-col justify-between items-center">
      <CoinContainer />
      <SwapButton />
      <CoinContainer />
      <SubmitButton />
    </div>
  );
};

export default Form;
