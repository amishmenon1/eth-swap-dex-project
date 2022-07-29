import React from "react";
import { Disclaimer } from "components";

function AppFooter() {
  console.log("AppFooter --- render");

  const disclaimerMessage = () => {
    const msg = `In order for this app to work successfully, you must have a Metamask wallet connected to the Ropsten testnet.`;
    return msg;
  };
  const styles = {
    footer: {
      backgroundColor: "#d9edf735",
      height: "110px",
      padding: "20px",
      color: "rgb(255, 255, 255)",
      marginBottom: "20px",
      marginTop: "20px",
    },
  };
  return (
    <footer style={styles.footer}>
      <Disclaimer message={disclaimerMessage()} />
    </footer>
  );
}

export default AppFooter;
