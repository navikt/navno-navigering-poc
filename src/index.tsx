import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import "./index.css";
import { AppContextProvider } from "./App/appContext";
import { DemoProvider } from "./DemoControlls/demoContext";
import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyling = createGlobalStyle`
    *:focus {
      outline: none;
      box-shadow: 0 0 0 .18rem ${theme.colors.fokusFarge};
      border-radius: 0.2rem;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <DemoProvider>
        <GlobalStyling />
        <App />
      </DemoProvider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
