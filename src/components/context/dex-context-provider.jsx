import React, { useState, useReducer, useEffect } from "react";
import { Row, Button } from "react-bootstrap";
import TransactionStatus from "global/transaction-status";
import { transactionStatusReducer } from "global/reducer/transaction-status-reducer";
import { useConnectedMetaMask, useMetaMask } from "metamask-react";
import WalletStatus from "global/wallet-status";
import { toast } from "react-toastify";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { useReadonlyVotingContract } from "global/dex-contract";
import { Tokens } from "global/tokens";
import { Dex, ToggleGroup } from "components";

export const DexContext = React.createContext();

export function DexContextProvider() {
  console.log("DexContextProvider --- render");
  const [swapState, dispatch] = useReducer(transactionStatusReducer, {});
  const [dexState, setDexState] = useState({
    input: {
      img: "",
      balance: null,
      token: Tokens.ETHEREUM,
    },
    output: {
      img: "",
      balance: null,
      token: Tokens.CHAINLINK,
    },
  });
  const dexContract = null; //useReadonlyVotingContract();
  const { status } = useMetaMask();
  const { input, output } = dexState;

  useEffect(() => {
    console.log("DexContextProvider --- status change: ", status);
  }, [status]);

  function toggleCb() {
    const { input, output } = dexState;
    const newInput = { ...output };
    const newOutput = { ...input };
    setDexState({ input: newInput, output: newOutput });
  }

  function setAccountBalance(input, output) {
    setDexState({ input, output });
  }

  return (
    <DexContext.Provider value={[swapState, dispatch]}>
      <ToggleGroup toggleCb={toggleCb} />
      <Dex
        input={input}
        output={output}
        connectedCallback={setAccountBalance}
      />
    </DexContext.Provider>
  );
}
