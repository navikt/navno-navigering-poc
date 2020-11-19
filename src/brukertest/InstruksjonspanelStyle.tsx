import * as React from "react";
import { ReactNode } from "react";
import styled from "styled-components/macro";
import { theme } from "../theme";

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 1rem;
`;

const Style = styled.div`
  margin: auto;
  padding: 2rem;
  max-width: 30rem;
  border: ${theme.colors.navBla} 0.3rem solid;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  button {
    border: solid 0.2rem ${theme.colors.navBla};
    border-radius: 0.3rem;
    background: transparent;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    margin-top: 2rem;
  }
`;

function InstruksjonspanelStyle(props: { children: ReactNode }) {
  return (
    <Center>
      <Style>{props.children}</Style>
    </Center>
  );
}

export default InstruksjonspanelStyle;
