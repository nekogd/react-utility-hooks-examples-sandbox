import React from "react";
import { useSlug } from "@nekogd/react-utility-hooks";

export const SlugExample = () => {
  const myString = "I am Title";
  const slug = useSlug(myString);

  return (
    <section className="component">
      <h5>useSlug demo</h5>
      <div>
        <p>Input: {myString}</p>
        <p>Output: {slug}</p>
      </div>
    </section>
  );
};
