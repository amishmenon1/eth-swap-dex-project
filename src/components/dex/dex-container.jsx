import React, { useState } from "react";
import { ToggleGroup, DexContextProvider } from "components";
import FormToggle from "global/form-toggle";

function DexContainer() {
  const [buySelected, setBuySelected] = useState(true);
  function toggleCb(selectedRef) {
    setBuySelected(
      selectedRef &&
        selectedRef.current.textContent.includes(FormToggle.BUY.text)
    );
  }
  return (
    <>
      <ToggleGroup toggleFn={toggleCb} />
      <DexContextProvider buySelected={buySelected} />
    </>
  );
}

export default DexContainer;
