import React, { useEffect } from "react";
import { DexDisplay } from "components";
import { useConnectedMetaMask } from "metamask-react";
import {
  useProvider,
  useDexContract,
  useMCTToken,
} from "global/hooks/web3-hooks";
import { Tokens } from "global/tokens";
import { formatUnits } from "utils/conversion-utils";
import { isChainIdSupported } from "global/chainid-map";

function ConnectedDex({
  connectionErrorCallback,
  connectedCallback,
  input,
  output,
}) {
  console.log("ConnectedDex --- render");

  const { account, ethereum, chainId } = useConnectedMetaMask();
  const provider = useProvider();
  const dexContract = useDexContract();
  const mctTokenContract = useMCTToken();

  useEffect(() => {
    console.log("connected account: ", account);
    console.log("connected chain: ", chainId);
    if (!account || !chainId) {
      return;
    }
    if (!isChainIdSupported(chainId)) {
      connectionErrorCallback();
    }
    async function updateBalances() {
      const weiBalance = await provider.getBalance(account);
      const ethBalance = formatUnits(weiBalance, 18).toString();
      debugger;
      if (input.token.symbol === Tokens.ETHEREUM.symbol) {
        input.balance = ethBalance;
        const outputBalance = await mctTokenContract.functions.balanceOf(
          account
        );
        const balance = outputBalance[0].toString();
        output.balance = formatUnits(balance, 18);
      }

      connectedCallback(input, output);
    }

    updateBalances();
  }, [account, chainId]);

  return <DexDisplay input={input} output={output} />;
}

export default ConnectedDex;
