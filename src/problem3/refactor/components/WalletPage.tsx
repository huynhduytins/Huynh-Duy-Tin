// import necessary types, components, hooks and custom hooks
import React, { useMemo } from "react";
import { WalletBalance, FormattedWalletBalance, BoxProps } from "../types";
import useWalletBalances from "../hooks/useWalletBalances";
import usePrices from "../hooks/usePrices";
import { getPriority } from "../utils";
import WalletRow from "./WalletRow";

// interface Props extends BoxProps {}  --> This line is not necessary because Props does not extend any types

// I changed Props to BoxProps
const WalletPage: React.FC<BoxProps> = (props: BoxProps) => {
  const { children, ...rest } = props;
  const balances = useWalletBalances();
  const prices = usePrices();

  const sortedBalances = useMemo(() => {
    return balances
      .filter((balance: WalletBalance) => {
        // const balancePriority = getPriority(balance.blockchain); --> this variable is unused
        // if (lhsPriority > -99) { --> I do not know where this variable come from
        if (balance.amount <= 0) {
          return true;
        }
        // }
        return false;
      })
      .sort((lhs: WalletBalance, rhs: WalletBalance) => {
        //I really do not what are two variable mean
        const leftPriority = getPriority(lhs.blockchain);
        const rightPriority = getPriority(rhs.blockchain);
        if (leftPriority > rightPriority) {
          return -1;
        }
        // what about '===' case
        // else if (rightPriority > leftPriority) {
        //   return 1;
        // }
        return 1;
      });
  }, [balances]); //I remove the prices from the dependency because it dose not exist in the function

  // const formattedBalances = sortedBalances.map((balance: WalletBalance) => { --> This variable is unused
  //   return {
  //     ...balance,
  //     formatted: balance.amount.toFixed(),
  //   };
  // });

  const rows = sortedBalances.map(
    (balance: FormattedWalletBalance, index: number) => {
      const usdValue = prices[balance.currency] * balance.amount;
      return (
        <WalletRow
          // className={classes.row} --> I do not know where classes comes from
          key={index}
          amount={balance.amount}
          usdValue={usdValue}
          formattedAmount={balance.formatted}
        />
      );
    }
  );

  return <div {...rest}>{rows}</div>;
};
