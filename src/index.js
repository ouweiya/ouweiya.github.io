import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

ReactDOM.render(
  <Container maxWidth="md" style={{ padding: "8px 0" }}>
    <CssBaseline />
    <App />
  </Container>,
  document.getElementById("root")
);

serviceWorker.unregister();




