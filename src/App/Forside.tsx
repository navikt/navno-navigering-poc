import * as React from "react";
import Meny from "./Meny/Meny";
import { menuData } from "../data/menuData";
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

function Forside() {
  const [, dispatch] = useAppContext();

  return (
    <>
      <Meny />
      <Grid>
        {menuData.områder.map((område) => (
          <Lenkepanel
            href="#"
            tittelProps="normaltekst"
            border
            onClick={() => dispatch({ type: "velgOmråde", område: område })}
          >
            <h3>{område.title}</h3>
            <p>{område.beskrivelse}</p>
          </Lenkepanel>
        ))}
      </Grid>
    </>
  );
}

export default Forside;
