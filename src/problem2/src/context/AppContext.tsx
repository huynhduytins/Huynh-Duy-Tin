import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import { dummyData } from "../constants";
import { TToken } from "../types";

interface IAppContext {
  mode: string;
  setMode: (mode: string) => void;
  handleSwapToken: () => void;
  fromToken: TToken | undefined;
  toToken: TToken | undefined;
  isSwapping: boolean;
  toTokenAmount: string;
  setIsSwapping: (value: boolean) => void;
  handleCalcSwapToken: (value: string) => void;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<string>("");
  const [fromToken, setFromToken] = useState<TToken | undefined>();
  const [toToken, setToToken] = useState<TToken | undefined>();
  const [toTokenAmount, setToTokenAmount] = useState<string>("0");
  const [isSwapping, setIsSwapping] = useState<boolean>(false);

  const changeMode = (chosenMode: string) => {
    document.documentElement.className = chosenMode;
  };

  const handleChangeMode = () => {
    const systemMode = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    if (mode === "system" || mode === "") {
      changeMode(systemMode);
    } else {
      changeMode(mode);
    }
  };

  const handleSwapToken = () => {
    setFromToken(toToken);
    setToToken(fromToken);
  };

  const handleCalcSwapToken = (value: string) => {
    const num = Number(value);
    const fromTokenToUSD = num * (fromToken?.price as number);
    const toUSTToToken = fromTokenToUSD / (toToken?.price as number);

    setToTokenAmount(toUSTToToken.toString());
    setIsSwapping(false);
  };

  useEffect(() => {
    handleChangeMode();
  }, [mode]);

  useEffect(() => {
    const USD = dummyData.find((el) => el.currency === "USD");
    const BUSD = dummyData.find((el) => el.currency === "BUSD");

    setMode(localStorage.getItem("mode") || "");
    setFromToken(USD);
    setToToken(BUSD);
  }, []);

  return (
    <AppContext.Provider
      value={{
        mode,
        setMode,
        handleSwapToken,
        fromToken,
        toToken,
        isSwapping,
        toTokenAmount,
        setIsSwapping,
        handleCalcSwapToken,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useMode = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
