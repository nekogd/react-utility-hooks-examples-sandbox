import React from "react";
import { useCounter } from "@nekogd/react-utility-hooks";

export const CounterExample = () => {
  // try passing useCounter('5') to see one of TS benefits
  const { count, increment, decrement, reset } = useCounter();

  return (
    <section className="component">
      <h5>useCounter demo - count value is {count}</h5>
      <div>
        <button onClick={increment}>Increment counter </button>
        <button onClick={decrement}>Decrement counter </button>
        <button onClick={reset}>Reset counter </button>
      </div>
    </section>
  );
};
