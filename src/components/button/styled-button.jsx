import React, { useState } from "react";
import { Button } from "react-bootstrap";

function StyledButton({
  onClick,
  disabled = false,
  hoverEnabled = false,
  variant = "contained",
  style = {},
  children,
}) {
  console.log("StyledButton --- render");
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = (e) => {
    setIsHovering(true);
  };

  const handleMouseLeave = (e) => {
    setIsHovering(false);
  };

  const buttonStyles = {
    ...style,
    backgroundColor: isHovering ? "#000000" : style.backgroundColor,
    color: isHovering ? "#FFFFFF" : style.color,
  };

  return (
    <Button
      variant={variant}
      onClick={onClick}
      onMouseEnter={hoverEnabled ? handleMouseEnter : null}
      onMouseLeave={hoverEnabled ? handleMouseLeave : null}
      style={buttonStyles}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}

export default StyledButton;
