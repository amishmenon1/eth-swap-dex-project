import { ethers } from "ethers";

export const chainIdToNameMap = {
  // 1: "Ethereum",
  3: "Ropsten",
  // 4: "Rinkeby",
  // 5: "Goerli",
  // 42: "Kovan",
};

const chainIdToEndpointMap = {
  // 1: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`,
  3: `https://ropsten.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`,
  // 4: `https://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`,
  // 5: `https://goerli.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`,
  // 42: `https://kovan.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`,
};

export const DEFAULT_CHAIN_ID = "0x5";

function getChainEndpoint(chainId) {
  const chainEndpoint = chainIdToEndpointMap[Number(chainId)];
  if (!chainEndpoint) {
    throw new Error(`Endpoint not found for chain ID: ${chainId}`);
  }
  return chainEndpoint;
}

export function getChainProvider(chainId) {
  const chainEndpoint = getChainEndpoint(chainId);
  return new ethers.providers.JsonRpcProvider(chainEndpoint);
}

export function getChainName(chainId) {
  const chainName = chainIdToNameMap[Number(chainId)];
  if (chainName) return chainName;
  return "Unknown";
}

export function isChainIdSupported(chainId) {
  const supportedChain = chainIdToNameMap[Number(chainId)];
  return Boolean(supportedChain);
}
