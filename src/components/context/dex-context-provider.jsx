import React, { useState, useReducer, useEffect } from "react";
import TransactionStatus from "global/transaction-status";
import { transactionStatusReducer } from "global/reducer/transaction-status-reducer";
import { useMetaMask } from "metamask-react";
import { Tokens } from "global/tokens";
import { Dex } from "components";

export const DexContext = React.createContext();

export function DexContextProvider({ buySelected }) {
  console.log("DexContextProvider --- render");
  const [swapState, dispatch] = useReducer(transactionStatusReducer, {});
  const [toggle, setToggle] = useState(false);
  const { status } = useMetaMask();
  const [dexState, setDexState] = useState({
    input: {
      img: "",
      balance: null,
      token: Tokens.ETHEREUM,
    },
    output: {
      img: "",
      balance: null,
      token: Tokens.MCT,
    },
  });
  const { input, output } = dexState;

  useEffect(() => {
    if (toggle) {
      toggleDexForm();
    }
    return () => setToggle(true);
  }, [buySelected, toggle]);

  function toggleDexForm() {
    const { input, output } = dexState;
    const newInput = { ...output };
    const newOutput = { ...input };
    setDexState({ input: newInput, output: newOutput });
  }

  function setAccountBalance(input, output) {
    setDexState({ input, output });
  }

  return (
    <>
      <DexContext.Provider value={[swapState, dispatch]}>
        <Dex
          status={status}
          input={input}
          output={output}
          connectedCallback={setAccountBalance}
        />
      </DexContext.Provider>
    </>
  );
}
