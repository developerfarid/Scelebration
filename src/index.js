import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AnimatedCursor from "react-animated-cursor";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AnimatedCursor innerSize={8}
      outerSize={18}
      color='244,90,90'
      outerAlpha={0.6}
      innerScale={0.7}
      outerScale={3}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]} />


  </React.StrictMode>,
  document.getElementById("root")
);
