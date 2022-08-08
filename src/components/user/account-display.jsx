import React, { useEffect } from "react";
import { useMetaMask } from "metamask-react";
import ConnectWalletButton from "components/connect-wallet/connect-wallet-button";
import { Row } from "react-bootstrap";

const styles = {
  connectButton: {
    display: "flex",
    justifyContent: "right",
    marginRight: "10px",
  },
  connected: {
    display: "flex",
    justifyContent: "right",
    marginRight: "10px",
    fontStyle: "italic",
  },
};

function ConnectedAccount({ account }) {
  return <ConnectedAccountDisplay style={styles.connected} account={account} />;
}

function NotConnectedAccount() {
  console.log("NotConnectedAccount --- render");

  return (
    <>
      <Row style={styles.connectButton}>
        <ConnectWalletButton />
      </Row>
    </>
  );
}

function ConnectedAccountDisplay() {
  console.log("ConnectedAccountDisplay --- render");

  const { status, account } = useMetaMask();
  useEffect(() => {
    console.log("status: ", status);
  }, [status]);
  return (
    <Row style={styles.connected}>
      {" "}
      Wallet Connected: {account.slice(0, 3)}...
      {account.slice(-3)}
    </Row>
  );
}

function AccountDisplay() {
  console.log("AccountDisplay --- render");

  const { status } = useMetaMask();
  useEffect(() => {
    console.log("AccountDisplay - metamask status: ", status);
  }, []);
  return (
    <>
      {status !== "connected" ? <NotConnectedAccount /> : <ConnectedAccount />}
    </>
  );
}

export default AccountDisplay;
