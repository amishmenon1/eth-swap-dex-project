import { MCTToken } from "abis/MCTToken";

export const Tokens = {
  ETHEREUM: {
    name: "Ethereum",
    symbol: "ETH",
  },
  MCT: {
    name: "MyCustomToken",
    symbol: "MCT",
    address: process.env.REACT_APP_MCT_TOKEN_ADDRESS,
    abi: MCTToken,
  },
};
