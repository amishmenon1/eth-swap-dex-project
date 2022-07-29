import React, { useState, useEffect } from "react";
import { DexDisplay, ToggleGroup } from "components";
import { useConnectedMetaMask } from "metamask-react";
import { useProvider } from "global/hooks/web3-hooks";
import { Tokens } from "global/tokens";
import { toEther, formatUnits } from "utils/conversion-utils";

function ConnectedDex({ connectedCallback, input, output }) {
  console.log("ConnectedDex --- render");

  const { account, chainId } = useConnectedMetaMask();
  const provider = useProvider();

  useEffect(() => {
    console.log("connected account: ", account);
    console.log("connected chain: ", chainId);

    if (!account || !chainId) {
      return;
    }
    async function updateBalances() {
      const weiBalance = await provider.getBalance(account);
      const ethBalance = formatUnits(weiBalance, 18).toString();
      const { token } = input;

      token.symbol === Tokens.ETHEREUM.symbol
        ? (input.balance = ethBalance)
        : (output.balance = ethBalance);

      connectedCallback(input, output);
    }

    updateBalances();
  }, [account, chainId]); // when account, chainId change?

  return <DexDisplay input={input} output={output} />;
}

export default ConnectedDex;
