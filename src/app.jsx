import React from "react";
import singleSpaReact from "single-spa-react";
import ReactDom from "react-dom/client";

import "./app.css";

export default function App(props) {
  console.log(props);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
  };

  return (
    <div className="navbar">
      <div
        className="navbar--item navbar--brand navbar--link"
        onClick={() => navigate("/")}
      >
        MFE App R - React
      </div>
      <div
        className="navbar--item navbar--link"
        onClick={() => navigate("/mfeAppA")}
      >
        App A
      </div>
      <div
        className="navbar--item navbar--link"
        onClick={() => navigate("/mfeAppV")}
      >
        App V
      </div>
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
