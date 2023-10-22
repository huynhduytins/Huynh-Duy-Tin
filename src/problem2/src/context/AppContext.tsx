import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface IAppContext {
  mode: string;
  setMode: (mode: string) => void;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState("");

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

  useEffect(() => {
    handleChangeMode();
  }, [mode]);

  useEffect(() => {
    setMode(localStorage.getItem("mode") || "");
  }, []);

  return (
    <AppContext.Provider value={{ mode, setMode }}>
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
