import React, { useState, useRef } from "react";

function StyledButton({
  onClick,
  disabled = false,
  hoverEnabled = false,
  style = {},
  children,
}) {
  console.log("StyledButton --- render");
  const [isHovering, setIsHovering] = useState(false);
  const buttonRef = useRef();

  function handleMouseEnter(e) {
    setIsHovering(true);
  }

  function handleMouseLeave(e) {
    setIsHovering(false);
  }
  function handleClick(e) {
    onClick(buttonRef);
  }

  const buttonStyles = {
    ...style,
    backgroundColor: isHovering ? "#000000" : style.backgroundColor,
    color: isHovering ? "#FFFFFF" : style.color,
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseEnter={hoverEnabled ? handleMouseEnter : null}
      onMouseLeave={hoverEnabled ? handleMouseLeave : null}
      style={buttonStyles}
      disabled={disabled}
      className="btn btn-primary"
      ref={buttonRef}
    >
      {children}
    </button>
  );
}

export default StyledButton;
