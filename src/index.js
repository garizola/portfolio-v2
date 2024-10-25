import React from "react";

import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AnimatedCursor from "react-animated-cursor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AnimatedCursor
      innerSize={10}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      showSystemCursor={false}
      hasBlendMode={true}
      outerStyle={{
        border: "3px solid #eee",
        zIndex: "1000000",
      }}
      innerStyle={{
        backgroundColor: "#eee",
        zIndex: "1000000",
      }}
      trailingSpeed={8}
    />
    <App />
  </React.StrictMode>
);
