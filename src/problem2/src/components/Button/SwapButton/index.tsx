import { useState } from "react";
import { MdSwapVert, MdOutlineArrowDownward } from "react-icons/md";

const SwapButton = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <button
      className="bg-primary-500 w-9 h-9 rounded-full flex items-center justify-center hover:bg-primary-100"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover ? (
        <MdSwapVert className="text-white text-xl" />
      ) : (
        <MdOutlineArrowDownward className="text-white text-lg" />
      )}
    </button>
  );
};

export default SwapButton;
