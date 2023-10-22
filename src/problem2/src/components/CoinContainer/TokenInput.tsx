import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useMode } from "../../context/AppContext";
import { useState, useEffect } from "react";
interface ITokenInput {
  isDisable?: boolean;
  toTokenAmount?: string;
}

const TokenInput = ({ isDisable, toTokenAmount }: ITokenInput) => {
  const { mode, handleCalcSwapToken, isSwapping } = useMode();
  const [numToken, setNumToken] = useState<string>("");

  useEffect(() => {
    if (!isDisable) {
      const delayDebounceFn = setTimeout(() => {
        handleCalcSwapToken(numToken);
      }, 1000);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [numToken]);

  return (
    <div className="flex gap-2 p-3 py-5 items-center">
      <Button variant="text" className={`${isDisable ? "invisible" : ""}`}>
        <p className="font-bold font-kanit text-sm dark:text-light-850">Max</p>
      </Button>
      <TextField
        type="number"
        InputProps={{
          disableUnderline: true,
          inputProps: { min: 0 },
        }}
        value={isSwapping ? "" : toTokenAmount !== "0" ? toTokenAmount : ""}
        disabled={isDisable}
        placeholder="0"
        variant="standard"
        className="flex-1"
        onChange={(e) => {
          setNumToken(e.target.value);
        }}
        sx={{
          ".MuiInputBase-input": {
            fontWeight: "bold",
            fontFamily: "Kanit",
            color: `${mode === "dark" ? "#FDFDFD" : ""}`,
            marginLeft: `${isDisable ? "-20px" : ""}`,
          },
          ".Mui-disabled": {
            "-webkit-text-fill-color": "#FDFDFD",
          },
        }}
      />
    </div>
  );
};

export default TokenInput;
