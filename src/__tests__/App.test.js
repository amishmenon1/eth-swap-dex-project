import React from "react";
import "@testing-library/jest-dom";
import {
  render,
  screen,
  waitForElementToBeRemoved,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import { ethers } from "ethers";
import { getVoteButton, simulateVote } from "../test/testUtils";
import {
  getTestingUtils,
  getContractTestingUtils,
  getMockedAccount,
  mockWeb3State,
} from "../test/testWeb3Utils";
import { VotingData } from "../abis/VotingData";
import { generateTestingUtils } from "eth-testing";
// import ExerciseType from "../global/exercise-types";
import App from "../App";
import { BigNumber } from "ethers";
// import VotingCards from "../components/VotingCards";

describe("App component", () => {
  const mockedAccount = getMockedAccount();
  const testingUtils = generateTestingUtils({
    providerType: "MetaMask",
    verbose: true,
  });

  let originalEth;
  beforeAll(() => {
    originalEth = global.window.ethereum;
    const provider = testingUtils.getProvider();
    window.ethereum = provider;
  });
  afterAll(() => {
    window.ethereum = originalEth;
  });
  beforeEach(() => {});
  afterEach(() => {
    testingUtils.clearAllMocks();
  });

  describe("web3 login", () => {
    it("can connect to MetaMask", async () => {
      testingUtils.mockNotConnectedWallet();
      testingUtils.mockRequestAccounts([mockedAccount]);

      render(<App />);
      const connectButton = await screen.findByRole("button", {
        name: /Connect/i,
      });

      // Click the Connect Wallet button (before login)
      fireEvent.click(connectButton);
      await waitForElementToBeRemoved(connectButton);

      const expectedElement = screen.queryByText(/Wallet Connected/i);
      expect(expectedElement).toBeInTheDocument();

      // Try to find Connect Wallet button (after login)
      const connectButtonAfterLogin = await screen.queryByRole("button", {
        name: /Connect/i,
      });
      expect(connectButtonAfterLogin).not.toBeInTheDocument();
    });
  });
});
