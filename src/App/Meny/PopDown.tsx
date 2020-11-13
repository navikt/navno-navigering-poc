import * as React from "react";
import { menuData } from "../../data/menuData";
import styled, { css } from "styled-components/macro";
import { theme } from "../../theme";
import { OmrådeI } from "../../data/types";
import { useDemoContext } from "../../DemoControlls/demoContext";
import { useNavigasjon } from "../useNavigasjon";
import { UnmountClosed } from "react-collapse";
import Undersider from "./Undersider";

const Style = styled.div`
  position: absolute;
  left: 0;
  z-index: 10;
  box-shadow: 0 1rem 1rem #0004;
`;

const Grid = styled.div<{ kortMeny: boolean }>`
  padding: 2rem 1rem 3rem;
  background-color: white;
  width: 100vw;
  border-bottom: 0.2rem solid ${theme.colors.navLysBla};
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
`;

const MenyKnapp = styled.button<{ small?: boolean }>`
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

const UndersiderStyle = styled.div`
  margin: 0.5rem 0 0.5rem 5rem;
`;

interface Props {
  lukkMeny: () => void;
  open: boolean;
}

function PopDown(props: Props) {
  const [context] = useDemoContext();
  const { navigerTil } = useNavigasjon();

  const handleNaviger = (område: OmrådeI, side?: string) => {
    navigerTil(område, side);
    props.lukkMeny();
  };

  return (
    <Style>
      <UnmountClosed isOpened={props.open}>
        <Grid kortMeny={!context.undersiderIMeny}>
          {menuData.områder.map((område) => (
            <div>
              <MenyKnapp onClick={() => handleNaviger(område)}>
                {context.visIkoner && område.ikon}
                {område.title}
              </MenyKnapp>
              {context.undersiderIMeny && (
                <UndersiderStyle>
                  <Undersider område={område} onNaviger={props.lukkMeny} />
                </UndersiderStyle>
              )}
            </div>
          ))}
        </Grid>
      </UnmountClosed>
    </Style>
  );
}

export default PopDown;
