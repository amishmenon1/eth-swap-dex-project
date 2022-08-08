import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Dex } from ".";
import { generateTestingUtils } from "eth-testing";
import { MetaMaskProvider } from "metamask-react";
import WalletStatus from "global/wallet-status";
import { Tokens } from "global/tokens";

describe("DEX renders and displays correct information", () => {
  const mockedAccount = "0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf";
  const testingUtils = generateTestingUtils({
    providerType: "MetaMask",
    verbose: "true",
  });
  beforeAll(() => {
    window.ethereum = testingUtils.getProvider();
  });
  afterEach(() => {
    testingUtils.clearAllMocks();
  });
  it("renders all components", () => {
    testingUtils.mockConnectedWallet([mockedAccount]);
    const status = WalletStatus.NOT_CONNECTED;
    const input = {
      img: "",
      balance: null,
      token: Tokens.ETHEREUM,
    };
    const output = {
      img: "",
      balance: null,
      token: Tokens.MCT,
    };
    render(
      <MetaMaskProvider>
        <Dex status={status} input={input} output={output} />
      </MetaMaskProvider>
    );
    const inputElement = screen.getByPlaceholderText(input.token.symbol);
    const outputElement = screen.getByPlaceholderText(output.token.symbol);

    expect(inputElement).toBeInTheDocument();
    expect(outputElement).toBeInTheDocument();
  });
  describe("Disconnected DEX shows only public content", () => {
    describe("Disconnected DEX shows 0 balances", () => {});
    describe("Disconnected DEX shows connect wallet button", () => {});
  });

  describe("Connected DEX shows all content", () => {
    describe("Disconnected DEX shows actual balances", () => {});
    describe("Disconnected DEX shows account info", () => {});
  });
});
