import React from "react";
import { useMetaMask } from "metamask-react";
import WalletStatus from "global/wallet-status";
import { toast } from "react-toastify";
import { ConnectedDex, DexDisplay, Loader } from "components";

function Dex({ input, output, connectedCallback }) {
  console.log("Dex --- render");
  const { status } = useMetaMask();

  let display = <DexDisplay input={input} output={output} />;

  switch (status) {
    case WalletStatus.INITIALIZING: {
      display = <Loader msg="Checking Web3 connection..." />;
      break;
    }
    case WalletStatus.CONNECTING: {
      break;
    }
    case WalletStatus.UNAVAILABLE: {
      toast.warn("Wallet unavailable", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
      console.log("status: ", status);
      break;
    }
    case WalletStatus.NOT_CONNECTED: {
      console.log("status: ", status);
      break;
    }
    case WalletStatus.CONNECTED: {
      display = (
        <ConnectedDex
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
