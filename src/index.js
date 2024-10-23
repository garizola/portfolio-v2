import React from "react";

import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AnimatedCursor from "react-animated-cursor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AnimatedCursor
      innerSize={15}
      outerSize={40}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      showSystemCursor={false}
      hasBlendMode={true}
      outerStyle={{
        border: "3px solid #000",
        zIndex: "1000000",
      }}
      innerStyle={{
        backgroundColor: "#000",
        zIndex: "1000000",
      }}
      trailingSpeed={8}
    />
    <App />
  </React.StrictMode>
);
