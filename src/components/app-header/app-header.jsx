import React from "react";
import { AccountDisplay } from "components/user";

function AppHeader() {
  console.log("AppHeader --- render");

  const styles = {
    header: {
      /* background-color: #d9edf735; */
      height: "120px",
      color: "rgb(255, 255, 255)",
      marginBottom: "20px",
    },
    title: {
      fontSize: "3em",
      marginTop: "0px",
      fontsSyle: "italic",
      fontFamily: "cursive",
      paddingTop: "20px",
    },
  };
  return (
    <>
      <header style={styles.header}>
        <h1 style={styles.title}>ETH Swap DEX</h1>
        <AccountDisplay />
      </header>
    </>
  );
}

export default AppHeader;
