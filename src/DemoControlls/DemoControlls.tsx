import * as React from "react";
import { useDemoContext } from "./demoContext";
import styled from "styled-components";
import { theme } from "../theme";

const Style = styled.div`
  padding: 1rem;
  border: 0.15rem ${theme.colors.navLimeGronnLighten80} solid;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const Knapp = styled.button`
  background-color: transparent;
  padding: 0.7rem;
  border: 0.2rem solid ${theme.colors.navLimeGronnLighten80};
  border-radius: 0.4rem;
`;

function DemoControlls() {
  const [context, dispatch] = useDemoContext();

  return (
    <Style>
      <h2>Demo-controlls:</h2>
      <Grid>
        <Knapp onClick={() => dispatch(context.visMeny ? "ingenMeny" : "meny")}>
          {context.visMeny ? "Skjul" : "Vis"} meny
        </Knapp>
      </Grid>
    </Style>
  );
}

export default DemoControlls;
