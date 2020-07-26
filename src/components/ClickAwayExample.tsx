import React, { useRef, useState } from "react";
import { useClickAway } from "@nekogd/react-utility-hooks";

export const ClickAwayExample = () => {
  const [counter, setCounter] = useState<number>(0);
  const ref = useRef() as React.MutableRefObject<HTMLElement>;
  useClickAway(() => {
    setCounter((s) => s + 1);
  }, ref);

  return (
    <section className="component">
      <h5>Click anywhere outside the span to increse the counter</h5>
      <span ref={ref}>
        <button type="button">This does not increase the counter</button>
      </span>
      <p>
        Click away counter (This has nothing to do with useCounter hook):{" "}
        {counter}
      </p>
    </section>
  );
};
