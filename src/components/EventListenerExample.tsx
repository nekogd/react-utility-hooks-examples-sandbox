import React, { useState, useCallback } from "react";
import { useEventListener } from "@nekogd/react-utility-hooks";

export const EventListenerExample = () => {
  // Initial state to track down mouse position
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Make sure the reference don't change
  const handler = useCallback(
    ({ clientX, clientY }) => {
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );

  // Add event listener using our hook
  useEventListener("mousemove", handler);

  return (
    <section className="component">
      <h5>This component is attaching event listener with custom hook</h5>
      <table>
        <tbody>
          <tr>
            <td>clientX</td>
            <td>{coords.x}</td>
          </tr>
          <tr>
            <td>clientY</td>
            <td>{coords.y}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
