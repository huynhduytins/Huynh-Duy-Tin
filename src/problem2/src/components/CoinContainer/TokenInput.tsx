import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const TokenInput = () => {
  return (
    <div className="flex gap-2 p-3 py-5 items-center">
      <Button variant="text">
        <p className="font-bold font-kanit text-sm">Max</p>
      </Button>
      <TextField
        type="number"
        InputProps={{
          disableUnderline: true,
        }}
        placeholder="0"
        variant="standard"
        className="flex-1"
        sx={{
          ".MuiInputBase-input": {
            fontWeight: "bold",
            fontFamily: "Kanit",
          },
        }}
      />
    </div>
  );
};

export default TokenInput;
