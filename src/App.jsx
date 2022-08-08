import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { AppHeader, AppFooter, DexContainer } from "components";

function App() {
  console.log("App component -- render");
  const styles = {
    app: {
      height: "100vh",
      textAlign: "center",
      backgroundColor: "#468557",
      color: "rgb(255, 255, 255)",
      transform: "translate3d(0, 0, 0)",
    },
  };
  return (
    <>
      <div style={styles.app}>
        <AppHeader />
        <ToastContainer />
        <DexContainer />
        <AppFooter />
      </div>
    </>
  );
}

export default App;
