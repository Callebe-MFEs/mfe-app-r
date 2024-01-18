import React from "react";
import singleSpaReact from "single-spa-react";
import ReactDom from "react-dom/client";

import "./app.css";

export default function App() {
  return (
    <div className="mfeAppR">
      <h1>MFE APP R</h1>
    </div>
  );
}

const headerLifecycle = singleSpaReact({
  React,
  ReactDOMClient: ReactDom,
  rootComponent: App,
  renderType: "createRoot",
});

export const bootstrap = headerLifecycle.bootstrap;
export const mount = headerLifecycle.mount;
export const unmount = headerLifecycle.unmount;
