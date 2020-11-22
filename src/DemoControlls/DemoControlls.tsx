import * as React from "react";
import { DemoContextActions, useDemoContext } from "./demoContext";
import styled from "styled-components/macro";
import { theme } from "../theme";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import { guid } from "nav-frontend-js-utils";
import { useHeaderContext } from "../App/Meny/HeaderContext";
import { useBrukertestContext } from "../brukertest/brukertestState";

const Wrapper = styled.div`
  position: fixed;
  right: 0;
  padding: 1rem;
  display: inline-flex;
  justify-content: flex-end;
  z-index: 1000;
`;

const PopDown = styled.div`
  position: absolute;
  padding: 1rem;
  background-color: white;
  min-width: 18rem;
  border: 0.2rem ${theme.colors.navLimeGronnLighten80} solid;
  filter: drop-shadow(0.2rem 0.2rem 3rem black);
  max-height: calc(100vh - 2rem);
  overflow-y: auto;
`;

const MenuButton = styled.button`
  border-radius: 50%;
  background-color: ${theme.colors.navLimeGronnLighten80};
  border: 0.2rem solid ${theme.colors.navLimeGronn};
  padding: 0.5rem;
  opacity: 0.6;
  z-index: 10;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, auto);
  grid-gap: 1rem;
`;

const CheckBoxStyle = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  input {
    width: 1.3rem;
    height: 1.3rem;
    margin-right: 0.5rem;
    flex-shrink: 0;
  }
`;

const Button = styled.button`
  border: 0.2rem solid ${theme.colors.navBla};
  background-color: transparent;
  border-radius: 0.3rem;
  padding: 0.5rem 2rem;
  text-decoration: none;
  color: currentColor;
  text-align: center;
  cursor: pointer;
`;

function CheckBox(props: {
  label: string;
  checked: boolean;
  action: DemoContextActions;
  onClick?: Function;
}) {
  const id = useRef(guid()).current;
  const [, dispatch] = useDemoContext();

  return (
    <CheckBoxStyle>
      <input
        id={id}
        type="checkbox"
        checked={props.checked}
        onChange={() => {
          dispatch(props.action);
          props.onClick?.();
        }}
      />
      <label htmlFor={id}>{props.label}</label>
    </CheckBoxStyle>
  );
}

function DemoControlls() {
  const [context, demoContextDispatch] = useDemoContext();
  const [brukertestState] = useBrukertestContext();
  const [, headerDispatch] = useHeaderContext();
  const [show, setShow] = useState(true);
  const ref = useRef(null);
  useClickAway(ref, () => setShow(false));

  if (brukertestState.state !== "titteUtenTest") {
    return null;
  }

  return (
    <Wrapper ref={ref}>
      <MenuButton onClick={() => setShow(!show)}>DC</MenuButton>
      {show && (
        <PopDown>
          <h2>Demo-controlls:</h2>
          <Grid>
            <CheckBox
              action={context.visMeny ? "skjulMeny" : "visMeny"}
              label="Meny"
              checked={context.visMeny}
            />
            <CheckBox
              action={"toggleSøkIMeny"}
              onClick={() => headerDispatch("openMenu")}
              label="Søk i meny"
              checked={context.søkIMeny}
            />
            <CheckBox
              action={"toggleSøkIHeader"}
              label="Søk i header"
              checked={context.søkIHeader}
            />
            <CheckBox
              action={"toggleKontaktOssIBanner"}
              label="Kontakt oss i banner"
              checked={context.kontaktOssIBanner}
            />
            <CheckBox
              action={
                context.undersiderIMeny
                  ? "ikkeVisUndersiderIMeny"
                  : "visUndersiderIMeny"
              }
              onClick={() => headerDispatch("openMenu")}
              label="Underpunkter i meny"
              checked={context.undersiderIMeny}
            />
            <CheckBox
              action={
                context.undersiderPaForside
                  ? "skjulUndersiderPaForside"
                  : "visUndersiderPaForside"
              }
              label="Underpunkter forside"
              checked={context.undersiderPaForside}
            />
            <CheckBox
              action={
                context.visBrødsmuler ? "skjulBrødsmuler" : "visBrødsmuler"
              }
              label="Brødsmuler"
              checked={context.visBrødsmuler}
            />
            <CheckBox
              action={"toggleToppTre"}
              label="Topp tre på forside"
              checked={context.toppTre}
            />
            <CheckBox
              action={"toggleIkonerToppTre"}
              label="Ikoner på topp tre"
              checked={context.ikonerToppTre}
            />
            <CheckBox
              action={context.visIkoner ? "skjulIkoner" : "visIkoner"}
              label="Ikoner"
              checked={context.visIkoner}
            />
            <CheckBox
              action={"toggleOmrådebeskrivelse"}
              label="Områdebeskrivelse"
              checked={context.områdeBeskrivelse}
            />
            <CheckBox
              action={"toggleOmrådebeskrivelseNavigasjonsside"}
              label="Områdebeskrivelse på navigasjonssider"
              checked={context.områdebeskrivelseNavigasjonsside}
            />
            <CheckBox
              action={"toggleBorder"}
              label="Strek rundt knapper"
              checked={context.border}
            />
            <CheckBox
              action={"toggleChevron"}
              label="Pil på knapper"
              checked={context.chevron}
            />
            <CheckBox
              action={"toggleContextNavigering"}
              label="Contextnavigering"
              checked={context.contextNavigering}
            />
            <CheckBox
              action={"toggleFooterNavigering"}
              label="Nyheter, statistikk og kontakt oss i footer"
              checked={context.footerNavigering}
            />
            <CheckBox
              action={"toggleUndersiderIFooter"}
              label="Undersider i footer"
              checked={context.undersiderIFooter}
            />
            <CheckBox
              action={"toggleContextTabs"}
              label="Context som tabs"
              checked={context.contextTabs}
            />
            <CheckBox
              action={"toggleTillatTreIBredden"}
              label="Tillat tre knapper i bredden"
              checked={context.tillatTreLenkerIBredden}
            />
            <CheckBox
              action={"toggeleKoronabanner"}
              label="Koronabanner"
              checked={context.coronaBanner}
            />
            <CheckBox
              action={"toggleSituasjonTekst"}
              label="Hva er din situasjon?"
              checked={context.situasjonTekst}
            />
            <Button onClick={() => demoContextDispatch("brukertestMinimalist")}>
              Brukertest minimalist
            </Button>
            <Button
              onClick={() => demoContextDispatch("brukertestMaksimalist")}
            >
              Brukertest maksimalist
            </Button>
            <Button onClick={() => demoContextDispatch("brukertestFavoritt")}>
              Brukertest favoritt
            </Button>
            <Button as="a" href="/navno-navigering-poc?testId=test">
              Prøv test-modus
            </Button>
          </Grid>
        </PopDown>
      )}
    </Wrapper>
  );
}

export default DemoControlls;
