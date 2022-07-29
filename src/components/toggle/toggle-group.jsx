import React, { useState } from "react";
import { ButtonGroup, Row } from "react-bootstrap";
import { ToggleButton } from "./toggle-button";

function ToggleGroup({ toggleCb }) {
  console.log("ToggleGroup --- render");
  const [buySelected, setBuySelected] = useState(true);

  function toggleButton() {
    setBuySelected(!buySelected);
    toggleCb();
  }
  const styles = {
    toggleContainer: {
      marginBottom: "15px",
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    toggleGroup: {
      width: "30%",
      display: "flex",
      justifyContent: "center",
    },
    button: {
      width: "100%",
    },
  };
  return (
    <Row style={styles.toggleContainer}>
      <ButtonGroup style={styles.toggleGroup} aria-label="toggle-group">
        <ToggleButton
          style={styles.button}
          hoverEnabled={false}
          selected={buySelected}
          onClick={toggleButton}
        >
          {" "}
          Buy{" "}
        </ToggleButton>
        <ToggleButton
          style={styles.button}
          hoverEnabled={false}
          selected={!buySelected}
          onClick={toggleButton}
        >
          {" "}
          Sell{" "}
        </ToggleButton>
      </ButtonGroup>
    </Row>
  );
}

export default ToggleGroup;
