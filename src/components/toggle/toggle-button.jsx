import React, { useState } from "react";
import { StyledButton } from "components";

export function ToggleButton({
  onClick,
  hoverEnabled,
  style,
  selected,
  children,
}) {
  console.log("ToggleButton --- render");

  const styles = {
    ...style,
    color: selected ? "white" : "black",
    backgroundColor: selected ? "darkgreen" : "lightgray",
  };
  return (
    <StyledButton
      hoverEnabled={hoverEnabled}
      onClick={onClick}
      variant={selected ? "primary" : "secondary"}
      style={styles}
    >
      {children}
    </StyledButton>
  );
}
