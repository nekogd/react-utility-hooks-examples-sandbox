import React from "react";
import { useHover } from "@nekogd/react-utility-hooks";

export const HoverExample = () => {
  // try passing useCounter('5') to see one of TS benefits
  const [hoverRef, isHovered] = useHover();

  return (
    <section className="component">
      <h5>useHover demo</h5>
      <div ref={hoverRef}>{isHovered ? "I am hovered" : "Hover over me"}</div>
    </section>
  );
};
