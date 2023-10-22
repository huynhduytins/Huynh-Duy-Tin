import { MdKeyboardArrowDown } from "react-icons/md";

interface IToken {
  token: string;
}

const Token = ({ token }: IToken) => {
  return (
    <div className="flex-1 flex items-center gap-2 token-form-light dark:token-form-dark py-4 px-6">
      <img
        src={`/assets/tokens/${token}.svg`}
        alt="token"
        className="w-7 h-7"
      />
      <div>
        <p className="text-xs">Token</p>
        <div className="flex items-center cursor-pointer gap-1">
          <p className="text-base">{token}</p>
          <MdKeyboardArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Token;
