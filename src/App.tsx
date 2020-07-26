import React from "react";
import "./App.css";
import {
  CounterExample,
  HoverExample,
  SlugExample,
  ToggleExample,
  EventListenerExample,
  ClickAwayExample,
} from "./components";

function App() {
  return (
    <div className="App">
      <CounterExample />
      <HoverExample />
      <SlugExample />
      <ToggleExample />
      <EventListenerExample />
      <ClickAwayExample />
    </div>
  );
}

export default App;
