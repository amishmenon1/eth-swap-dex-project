import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { AppHeader, AppFooter, DexContextProvider } from "components";

const App = () => {
  console.log("App component -- render");
  const styles = {
    app: {
      height: "100vh",
      textAlign: "center",
      backgroundColor: "#468557",
      color: "rgb(255, 255, 255)",
    },
  };
  return (
    <>
      <div style={styles.app}>
        <AppHeader />
        <ToastContainer />
        <DexContextProvider />
        <AppFooter />
      </div>
    </>
  );
};

export default App;
