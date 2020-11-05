import * as React from "react";
import { useDemoContext } from "./demoContext";
import styled from "styled-components";
import { theme } from "../theme";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  margin-top: 1rem;
  padding: 1rem;
  display: inline-flex;
  justify-content: flex-end;
  z-index: 1000;
`;

const PopDown = styled.div`
  position: absolute;
  padding: 1rem;
  background-color: white;
  min-width: 15rem;
  border: 0.2rem ${theme.colors.navLimeGronnLighten80} solid;
  filter: drop-shadow(0.2rem 0.2rem 3rem black);
`;

const MenuButton = styled.button`
  border-radius: 50%;
  background-color: ${theme.colors.navLimeGronnLighten80};
  border: 0.2rem solid ${theme.colors.navLimeGronn};
  padding: 0.5rem;
  opacity: 0.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, auto);
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
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setShow(false));

  return (
    <Wrapper>
      {show && (
        <PopDown ref={ref}>
          <h2>Demo-controlls:</h2>
          <Grid>
            <Knapp
              onClick={() => dispatch(context.visMeny ? "ingenMeny" : "meny")}
            >
              {context.visMeny ? "Skjul" : "Vis"} meny
            </Knapp>
            <Knapp
              onClick={() =>
                dispatch(context.visIkoner ? "skjulIkoner" : "visIkoner")
              }
            >
              {context.visIkoner ? "Skjul" : "Vis"} ikoner
            </Knapp>
          </Grid>
        </PopDown>
      )}
      <MenuButton onClick={() => setShow(!show)}>DC</MenuButton>
    </Wrapper>
  );
}

export default DemoControlls;
