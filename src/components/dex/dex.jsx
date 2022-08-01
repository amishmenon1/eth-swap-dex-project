import React from "react";
import { useMetaMask } from "metamask-react";
import WalletStatus from "global/wallet-status";
import { toast } from "react-toastify";
import { ConnectedDex, DexDisplay, Loader } from "components";
import { isChainIdSupported } from "global/chainid-map";

function DisconnectedDex({ input, output }) {
  return <DexDisplay input={input} output={output} />;
}

function Dex({ status, input, output, connectedCallback }) {
  console.log("Dex --- render");
  const { chainId } = useMetaMask();
  function clearBalances(input, output) {
    input.balance = "0";
    output.balance = "0";
  }

  function connectionErrorCallback() {
    toast.warn("Unsupported chain. Check connection.", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 5000,
    });
  }
  let display;

  switch (status) {
    case WalletStatus.INITIALIZING: {
      display = <Loader msg="Checking Web3 connection..." />;
      break;
    }
    case WalletStatus.CONNECTING: {
      display = <DisconnectedDex input={input} output={output} />;
      break;
    }
    case WalletStatus.UNAVAILABLE: {
      toast.warn("Wallet unavailable", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
      console.log("status: ", status);
      display = <DisconnectedDex input={input} output={output} />;
      break;
    }
    case WalletStatus.NOT_CONNECTED: {
      console.log("status: ", status);
      clearBalances(input, output);
      display = <DisconnectedDex input={input} output={output} />;
      break;
    }
    case WalletStatus.CONNECTED: {
      display = (
        <ConnectedDex
          connectionErrorCallback={connectionErrorCallback}
          connectedCallback={connectedCallback}
          input={input}
          output={output}
        />
      );
      break;
    }
    default: {
      console.error("default - shouldnt happen. Status: ", status);
      break;
    }
  }
  return display;
}

export default Dex;
