import * as React from "react";
import { menuData } from "../../data/menuData";
import styled, { css } from "styled-components";
import { theme } from "../../theme";
import { OmrådeI } from "../../data/types";
import { useDemoContext } from "../../DemoControlls/demoContext";
import { useAppContext } from "../appContext";

const Style = styled.div<{ kortMeny: boolean }>`
  padding: 2rem 1rem 3rem;
  position: absolute;
  left: 0;
  background-color: white;
  width: 100vw;
  border: 0.15rem solid ${theme.colors.navLysBla};
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, minmax(10rem, 20rem));
  @media (max-width: 40em) {
    grid-template-columns: 1fr;
  }
  ${(props) =>
    props.kortMeny &&
    css`
      grid-auto-rows: 4rem;
    `};
  z-index: 10;
`;

const Knapp = styled.button<{ small?: boolean }>`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  color: ${theme.colors.navBla};
  font-size: ${(props) => (props.small ? "1rem" : "1.2rem")};
  text-align: left;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  svg {
    width: 2rem;
    max-height: 2rem;
    margin-right: 1.5rem;
    stroke-width: 1.2;
    opacity: 0.8;
  }
`;

const Område = styled.div``;

const Undersider = styled.div`
  padding-left: 5rem;
  margin-bottom: 1rem;
`;

interface Props {
  lukkMeny: () => void;
}

function PopDown(props: Props) {
  const [context] = useDemoContext();
  const [, dispatch] = useAppContext();

  return (
    <Style kortMeny={!context.langMeny}>
      {menuData.områder.map((område) => (
        <Område>
          <Knapp
            onClick={() => {
              dispatch({ type: "velgOmråde", område: område });
              props.lukkMeny();
            }}
          >
            {context.visIkoner && område.ikon}
            {område.title}
          </Knapp>
          {context.langMeny && (
            <Undersider>
              {område.sider.slice(0, 3).map((side) => (
                <Knapp
                  small={true}
                  onClick={() => {
                    dispatch({ type: "velgOmråde", område: område });
                    dispatch({ type: "velgSide", side: side });
                    props.lukkMeny();
                  }}
                >
                  {side}
                </Knapp>
              ))}
              <Knapp
                small={true}
                onClick={() => {
                  dispatch({ type: "velgOmråde", område: område });
                  props.lukkMeny();
                }}
              >
                Mer..
              </Knapp>
            </Undersider>
          )}
        </Område>
      ))}
    </Style>
  );
}

export default PopDown;
