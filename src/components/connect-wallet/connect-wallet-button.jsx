import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { useMetaMask } from "metamask-react";
import { StyledButton } from "components";
import { Modal, Button } from "react-bootstrap";
import WalletStatus from "global/wallet-status";

function ConnectWalletButton() {
  console.log("ConnectWalletButton --- render");
  const [show, setShow] = useState(false);
  const { connect, status } = useMetaMask();

  const styles = {
    connectButton: {
      backgroundColor: "#D6DBDF",
      color: "#000000",
    },
    dialogButton: {
      backgroundColor: "#1976D2",
      color: "#FFFFFF",
    },
  };

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <>
      <StyledButton
        onClick={() => setShow(true)}
        hoverEnabled={true}
        style={styles.connectButton}
      >
        Connect Wallet
      </StyledButton>

      <Dialog
        open={show}
        onClose={() => setShow(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Connect wallet</DialogTitle>
        <DialogContent>
          <StyledButton
            onClick={connect}
            disabled={status === WalletStatus.CONNECTING}
            hoverEnabled={true}
            style={styles.dialogButton}
          >
            {status === WalletStatus.CONNECTING ? "Connecting" : "MetaMask"}
          </StyledButton>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ConnectWalletButton;
