import * as React from "react";
import Meny from "./Meny/Meny";
import styled from "styled-components";
import { useAppContext } from "./appContext";
import Lenkepanel from "nav-frontend-lenkepanel";

const Grid = styled.div`
  margin-top: 5rem;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, minmax(10rem, 20rem));
  grid-gap: 1rem;
`;

function Område() {
  const [state, dispatch] = useAppContext();

  const område = state.område!;

  return (
    <>
      <Meny />
      <Grid>
        {område.sider.map((side) => (
          <Lenkepanel href="#" border tittelProps="normaltekst" onClick={() => dispatch({ type: "velgSide", side: side })}>
            <h3>{side}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, quisquam.</p>
          </Lenkepanel>
        ))}
      </Grid>
    </>
  );
}

export default Område;
