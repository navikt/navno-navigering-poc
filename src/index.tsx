import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import "./index.css";
import { DemoProvider } from "./DemoControlls/demoContext";
import { createGlobalStyle } from "styled-components/macro";
import { theme } from "./theme";
import { BrowserRouter, Route } from "react-router-dom";
import { HeaderContextProvider } from "./App/Meny/HeaderContext";
import { BrukertestContextProvider } from "./brukertest/brukertestState";
import ErrorBoundary from "./utils/ErrorBoundary";

const GlobalStyling = createGlobalStyle`
    *:focus {
      outline: none;
      box-shadow: 0 0 0 .18rem ${theme.colors.fokusFarge};
      border-radius: 0.2rem;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <DemoProvider>
        <BrukertestContextProvider>
          <GlobalStyling />
          <HeaderContextProvider>
            <BrowserRouter>
              <Route path="/:domain?/:omrade?/:side?" children={<App />} />
            </BrowserRouter>
          </HeaderContextProvider>
        </BrukertestContextProvider>
      </DemoProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
