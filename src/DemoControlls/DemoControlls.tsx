import * as React from "react";
import { DemoContextActions, useDemoContext } from "./demoContext";
import styled from "styled-components/macro";
import { theme } from "../theme";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import { guid } from "nav-frontend-js-utils";

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
  min-width: 18rem;
  border: 0.2rem ${theme.colors.navLimeGronnLighten80} solid;
  filter: drop-shadow(0.2rem 0.2rem 3rem black);
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
  }
`;

function CheckBox(props: {
  label: string;
  checked: boolean;
  action: DemoContextActions;
}) {
  const id = useRef(guid()).current;
  const [, dispatch] = useDemoContext();

  return (
    <CheckBoxStyle>
      <input
        id={id}
        type="checkbox"
        checked={props.checked}
        onClick={() => dispatch(props.action)}
      />
      <label htmlFor={id}>{props.label}</label>
    </CheckBoxStyle>
  );
}

function DemoControlls() {
  const [context] = useDemoContext();
  const [show, setShow] = useState(true);
  const ref = useRef(null);
  useClickAway(ref, () => setShow(false));

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
              action={context.visIkoner ? "skjulIkoner" : "visIkoner"}
              label="Ikoner"
              checked={context.visIkoner}
            />
            <CheckBox
              action={
                context.undersiderIMeny
                  ? "ikkeVisUndersiderIMeny"
                  : "visUndersiderIMeny"
              }
              label="Underpunkter i meny"
              checked={context.undersiderIMeny}
            />
            <CheckBox
              action={
                context.visBrødsmuler ? "skjulBrødsmuler" : "visBrødsmuler"
              }
              label="Brødsmuler"
              checked={context.visBrødsmuler}
            />
            <CheckBox
              action={
                context.undersiderPaForside
                  ? "skjulUndersiderPaForside"
                  : "visUndersiderPaForside"
              }
              label="Lenke til undersider på forside"
              checked={context.undersiderPaForside}
            />
            <CheckBox
              action={"toggleOmrådebeskrivelse"}
              label="Beskrivelse av område"
              checked={context.områdeBeskrivelse}
            />
            <CheckBox
              action={context.featuredContent ? "skjulFeatured" : "visFeatured"}
              label="Topp tre på forside"
              checked={context.featuredContent}
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
          </Grid>
        </PopDown>
      )}
    </Wrapper>
  );
}

export default DemoControlls;
