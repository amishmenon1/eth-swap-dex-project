import React from "react";
import { Button } from "react-bootstrap";

function Loader({ msg }) {
  const styles = {
    loader: {
      backgroundColor: "darkgreen",
      color: "white",
    },
  };
  return (
    <Button
      variant="link"
      id="loader"
      style={styles.loader}
      className="text-center"
    >
      {msg}
    </Button>
  );
}

export default Loader;
