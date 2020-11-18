import * as React from "react";
import { useRef } from "react";
import styled from "styled-components/macro";
import { theme } from "../../theme";
import NavLogo from "./NavLogo";
import { menuData } from "../../data/menuData";
import { useClickAway } from "react-use";
import { useDemoContext } from "../../DemoControlls/demoContext";
import MenyButton from "../../components/MenyButton";
import Knapp from "nav-frontend-knapper/lib/knapp";
import Brodsmuler from "./Brodsmuler";
import PopDown from "./PopDown";
import { useNavigasjon } from "../useNavigasjon";
import { OmrådeI } from "../../data/types";
import ToppNivåNavigering from "./ToppNivåNavigering";
import Søk from "../../components/Søk";
import { useHeaderContext } from "./HeaderContext";

const Style = styled.div`
  padding: 1rem;
  border-bottom: 0.2rem solid ${theme.colors.navLysBla};
  display: flex;
  flex-wrap: wrap;
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

function Header() {
  const [headerState, dispatch] = useHeaderContext();
  const ref = useRef(null);
  const [demoContext] = useDemoContext();
  const { navigerTil } = useNavigasjon();
  useClickAway(ref, () => dispatch("closeMenu"));

  const handleNaviger = (område?: OmrådeI) => {
    navigerTil(område);
    dispatch("closeMenu");
  };

  return (
    <div ref={ref}>
      {demoContext.toppnivåNavigering && <ToppNivåNavigering />}
      <Style>
        <NavButton onClick={() => handleNaviger()}>
          <NavLogo height={"2.5rem"} />
        </NavButton>
        {demoContext.visMeny && (
          <MenyButton
            isOpen={headerState.menuOpen}
            onClick={() => dispatch("toggleMenu")}
            label={"Meny"}
          />
        )}
        {demoContext.søkIHeader && <Søk />}
        <ShowOnBigScreen>
          <Brodsmuler />
        </ShowOnBigScreen>
        <LoggInnKnapp
          onClick={() =>
            handleNaviger(
              menuData.områder.find((område) =>
                område.title.includes("Ditt NAV")
              )!
            )
          }
        >
          Logg inn
        </LoggInnKnapp>
      </Style>
      <PopDown
        lukkMeny={() => dispatch("closeMenu")}
        open={headerState.menuOpen}
      />
      <ShowOnSmallScreen>
        <Brodsmuler />
      </ShowOnSmallScreen>
    </div>
  );
}

export default Header;
