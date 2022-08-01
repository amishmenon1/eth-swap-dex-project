import React, { useState } from "react";
import { ButtonGroup, Row } from "react-bootstrap";
import { ToggleButton } from "./toggle-button";

function ToggleGroup({ toggleFn }) {
  console.log("ToggleGroup --- render");
  const [selected, setSelected] = useState(true);

  function handleToggle(btnRef) {
    setSelected(!selected);
    toggleFn(btnRef);
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
          id="buy-toggle"
          aria-label="Buy"
          style={styles.button}
          hoverEnabled={false}
          selected={selected}
          onClick={handleToggle}
        >
          {" "}
          Buy{" "}
        </ToggleButton>
        <ToggleButton
          id="sell-toggle"
          aria-label="Sell"
          style={styles.button}
          hoverEnabled={false}
          selected={!selected}
          onClick={handleToggle}
        >
          {" "}
          Sell{" "}
        </ToggleButton>
      </ButtonGroup>
    </Row>
  );
}

export default ToggleGroup;
