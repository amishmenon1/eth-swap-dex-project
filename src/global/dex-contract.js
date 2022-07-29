import React from "react";
import { VotingData } from "abis/VotingData";
import { useConnectedMetaMask } from "metamask-react";
import { ethers } from "ethers";

export function useReadonlyVotingContract() {
  const { ethereum } = useConnectedMetaMask();
  const provider = new ethers.providers.Web3Provider(ethereum);
  const contract = React.useMemo(() => {
    return new ethers.Contract(
      process.env.REACT_APP_VOTING_CONTRACT_ADDRESS_NEW, //old
      VotingData,
      provider
    );
  }, [ethereum]);
  return contract;
}

export function useVotingContract() {
  const { ethereum } = useConnectedMetaMask();
  const contract = React.useMemo(() => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    console.log(
      `contract address: ${process.env.REACT_APP_VOTING_CONTRACT_ADDRESS}`
    );
    return new ethers.Contract(
      process.env.REACT_APP_VOTING_CONTRACT_ADDRESS_NEW, //old
      VotingData,
      signer
    );
  }, [ethereum]);
  return contract;
}
