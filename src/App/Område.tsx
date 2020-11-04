import * as React from "react";
import Meny from "./Meny/Meny";
import { useAppContext } from "./appContext";
import Lenkepanel from "nav-frontend-lenkepanel";
import { Grid } from "../components/LenkepanelGrid";
import styled from "styled-components";

const Style = styled.div`
      h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

function Område() {
  const [state, dispatch] = useAppContext();

  const område = state.område!;

  return (
    <Style>
      <h2>{område.title}</h2>
      <Grid>
        {område.sider.map((side) => (
          <Lenkepanel href="#" border tittelProps="normaltekst" onClick={() => dispatch({ type: "velgSide", side: side })}>
            <h3>{side}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, quisquam.</p>
          </Lenkepanel>
        ))}
      </Grid>
    </Style>
  );
}

export default Område;
