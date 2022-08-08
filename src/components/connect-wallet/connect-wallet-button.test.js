import React from "react";
import "@testing-library/jest-dom";
import {
  render,
  screen,
  waitFor,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { generateTestingUtils } from "eth-testing";
import { MetaMaskProvider } from "metamask-react";
import { AccountDisplay } from "components/user";

describe("web3", async () => {
  let connectWalletButtonElement;
  const testingUtils = generateTestingUtils({
    providerType: "MetaMask",
    verbose: "true",
  });
  const mockedAccount = "0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf";

  beforeAll(() => {
    window.ethereum = testingUtils.getProvider();
  });
  afterEach(() => {
    testingUtils.clearAllMocks();
  });

  it("is displayed when wallet not connected", async () => {
    testingUtils.mockNotConnectedWallet();
    testingUtils.mockRequestAccounts([mockedAccount]);
    render(
      <MetaMaskProvider>
        <AccountDisplay />
      </MetaMaskProvider>
    );
    connectWalletButtonElement = await waitFor(() =>
      screen.queryByText("Connect Wallet")
    );
    expect(connectWalletButtonElement).toBeInTheDocument();
  });

  it("is not displayed when wallet is connected", async () => {
    testingUtils.mockConnectedWallet([mockedAccount]);
    render(
      <MetaMaskProvider>
        <AccountDisplay />
      </MetaMaskProvider>
    );
    connectWalletButtonElement = await waitFor(() =>
      screen.queryByText("Connect Wallet")
    );
    console.log(connectWalletButtonElement);
    fireEvent.click(connectWalletButtonElement);
    await waitForElementToBeRemoved(connectWalletButtonElement);

    expect(connectWalletButtonElement).not.toBeInTheDocument();
  });

  //   it("", async () => {
  //     const { provider, testingUtils, generateContractUtils } = setupEthTesting({
  //       providerType: "MetaMask",
  //     });

  //     testingUtils.mockConnectedWallet([mockedAccount]);

  //     function useTest() {
  //       try {
  //         console.log("usetest");
  //         const connectedMetaMask = useConnectedMetaMask();
  //         return connectedMetaMask;
  //       } catch (err) {
  //         return err;
  //       }
  //     }

  //     const { result, waitForNextUpdate } = renderHook(useTest, {
  //       wrapper: MetaMaskProvider,
  //     });

  //     await waitForNextUpdate();

  //     // await waitForNextUpdate();
  //     console.log("hello");
  //     console.log("result current: ", result.current);
  //     const { account } = result.current;
  //     console.log("account: ", account);
  //     expect(result.current.account).toEqual(mockedAccount);
  //     expect(result.current.chainId).toEqual("0x3");
  //   });
});
