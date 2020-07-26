import React from "react";
import { useToggle } from "@nekogd/react-utility-hooks";

export const ToggleExample = () => {
  const { toggled, handleToggled } = useToggle();

  const handleClick = () => {
    handleToggled();
  };

  return (
    <section className="component">
      <h5>Toggle Example</h5>
      <button onClick={handleClick}>toggle</button>
      {toggled ? "visible" : "hidden"}
    </section>
  );
};
