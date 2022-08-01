import React from "react";
import { useConnectedMetaMask } from "metamask-react";
import { ethers } from "ethers";
import { EthSwap } from "abis/EthSwap";
import { MCTToken } from "abis/MCTToken";

export function useProvider() {
  const { ethereum } = useConnectedMetaMask();
  const provider = new ethers.providers.Web3Provider(ethereum);
  return provider;
}

export function useMCTToken() {
  const { ethereum } = useConnectedMetaMask();
  const provider = useProvider();
  const contract = React.useMemo(() => {
    return new ethers.Contract(
      process.env.REACT_APP_MCT_TOKEN_ADDRESS, //old
      MCTToken,
      provider
    );
  }, [ethereum]);
  return contract;
}

export function useDexContract() {
  const { ethereum } = useConnectedMetaMask();
  const provider = useProvider();
  const contract = React.useMemo(() => {
    return new ethers.Contract(
      process.env.REACT_APP_DEX_CONTRACT_ADDRESS, //old
      EthSwap,
      provider.getSigner()
    );
  }, [ethereum]);
  return contract;
}

export function useReadOnlyDexContract() {
  const { ethereum } = useConnectedMetaMask();
  const provider = useProvider();
  const contract = React.useMemo(() => {
    return new ethers.Contract(
      process.env.REACT_APP_DEX_CONTRACT_ADDRESS, //old
      EthSwap,
      provider
    );
  }, [ethereum]);
  return contract;
}
