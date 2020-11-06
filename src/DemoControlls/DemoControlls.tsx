import * as React from "react";
import { useDemoContext } from "./demoContext";
import styled from "styled-components";
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
  onClick: () => void;
}) {
  const id = useRef(guid()).current;

  return (
    <CheckBoxStyle>
      <input
        id={id}
        type="checkbox"
        checked={props.checked}
        onClick={props.onClick}
      />
      <label htmlFor={id}>{props.label}</label>
    </CheckBoxStyle>
  );
}

function DemoControlls() {
  const [context, dispatch] = useDemoContext();
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
              onClick={() => dispatch(context.visMeny ? "ingenMeny" : "meny")}
              label="Vis meny"
              checked={context.visMeny}
            />
            <CheckBox
              onClick={() =>
                dispatch(context.visIkoner ? "skjulIkoner" : "visIkoner")
              }
              label="Vis ikoner"
              checked={context.visIkoner}
            />
            <CheckBox
              onClick={() => {
                dispatch(context.langMeny ? "kortMeny" : "langMeny");
              }}
              label="Vis underpunkter i meny"
              checked={context.langMeny}
            />
            <CheckBox
              onClick={() =>
                dispatch(
                  context.visBrødsmuler ? "skjulBrødsmuler" : "visBrødsmuler"
                )
              }
              label="Vis brødsmuler"
              checked={context.visBrødsmuler}
            />
            <CheckBox
              onClick={() =>
                dispatch(
                  context.undersiderPaForside
                    ? "skjulUndersiderPaForside"
                    : "visUndersiderPaForside"
                )
              }
              label="Vis undersider på forside"
              checked={context.undersiderPaForside}
            />
          </Grid>
        </PopDown>
      )}
    </Wrapper>
  );
}

export default DemoControlls;
