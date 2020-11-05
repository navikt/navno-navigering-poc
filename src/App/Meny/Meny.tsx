import * as React from "react";
import { useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import NavLogo from "./NavLogo";
import { menuData } from "../../data/menuData";
import { useClickAway } from "react-use";
import { useDemoContext } from "../../DemoControlls/demoContext";
import { useAppContext } from "../appContext";
import MenyButton from "../../components/MenyButton";
import Knapp from "nav-frontend-knapper/lib/knapp";
import Brodsmuler from "./Brodsmuler";

const Style = styled.div`
  padding: 1rem;
  border-bottom: 0.2rem solid ${theme.colors.navLysBla};
  display: flex;
  align-items: center;
`;

const NavButton = styled.button`
  display: inline-flex;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.6rem;
  &:hover {
    opacity: 0.8;
  }
`;

const PopDown = styled.div`
  padding: 2rem 1rem 3rem;
  position: absolute;
  left: 0;
  background-color: white;
  width: 100vw;
  border: 0.15rem solid ${theme.colors.navLysBla};
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, minmax(10rem, 20rem));
  grid-auto-rows: 4rem;
  z-index: 10;
`;

const Område = styled.button`
  background: transparent;
  border: none;
  color: ${theme.colors.navBla};
  text-decoration: underline;
  font-size: 1.2rem;
  text-align: left;
`;

const LoggInnKnapp = styled(Knapp)`
  text-transform: none;
  padding: 0.5em 1.2em;
`;

const ShowOnSmallScreen = styled.div`
  padding: 1rem 0;
  @media (min-width: 1200px) {
    display: none;
  }
`;

const ShowOnBigScreen = styled.div`
  flex-grow: 1;
  > * {
    @media not all and (min-width: 1200px) {
      display: none;
    }
  }
`;

function Meny() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const [demoContext] = useDemoContext();
  const [, dispatch] = useAppContext();
  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref}>
      <Style>
        <NavButton onClick={() => dispatch({ type: "clear" })}>
          <NavLogo height={"2.5rem"} />
        </NavButton>
        {demoContext.visMeny && (
          <MenyButton
            isOpen={open}
            onClick={() => setOpen(!open)}
            label={"Meny"}
          />
        )}
        <ShowOnBigScreen>
          <Brodsmuler />
        </ShowOnBigScreen>
        <LoggInnKnapp
          onClick={() =>
            dispatch({
              type: "velgOmråde",
              område: menuData.områder.find((område) =>
                område.title.includes("Ditt NAV")
              )!,
            })
          }
        >
          Logg inn
        </LoggInnKnapp>
      </Style>
      {open && (
        <PopDown>
          {menuData.områder.map((område) => (
            <Område
              onClick={() => {
                dispatch({ type: "velgOmråde", område: område });
                setOpen(false);
              }}
            >
              {område.title}
            </Område>
          ))}
        </PopDown>
      )}
      <ShowOnSmallScreen>
        <Brodsmuler />
      </ShowOnSmallScreen>
    </div>
  );
}

export default Meny;
