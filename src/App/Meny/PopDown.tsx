import * as React from "react";
import { menuData } from "../../data/menuData";
import styled from "styled-components";
import { theme } from "../../theme";
import { OmrådeI } from "../../data/types";
import { useDemoContext } from "../../DemoControlls/demoContext";

const Style = styled.div`
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
  grid-auto-rows: 4rem;
  z-index: 10;
`;

const Område = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  color: ${theme.colors.navBla};
  font-size: 1.2rem;
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

interface Props {
  setOmråde: (område: OmrådeI) => void;
}

function PopDown(props: Props) {
  const [context] = useDemoContext();

  return (
    <Style>
      {menuData.områder.map((område) => (
        <Område onClick={() => props.setOmråde(område)}>
          {context.visIkoner && område.ikon}
          {område.title}
        </Område>
      ))}
    </Style>
  );
}

export default PopDown;
