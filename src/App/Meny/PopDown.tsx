import * as React from "react";
import { menuData } from "../../data/menuData";
import styled, { css } from "styled-components";
import { theme } from "../../theme";
import { OmrådeI } from "../../data/types";
import { useDemoContext } from "../../DemoControlls/demoContext";
import { useNavigasjon } from "../appContext";
import { HoyreChevron } from "nav-frontend-chevron";

const Style = styled.div<{ kortMeny: boolean }>`
  padding: 2rem 1rem 3rem;
  position: absolute;
  left: 0;
  background-color: white;
  width: 100vw;
  border: 0.2rem solid ${theme.colors.navLysBla};
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

const ChevronKnapp = styled(MenyKnapp)`
  transition: 0.3s;
  > * {
    margin-right: 0.5rem;
  }
  &:hover {
    margin-left: 0.5rem;
  }
`;

const UndersiderStyle = styled.div`
  margin: 0.5rem 0 0.5rem 5rem;
`;

interface Props {
  lukkMeny: () => void;
}

export function Undersider(props: {
  område: OmrådeI;
  hanldeNaviger: (område: OmrådeI, side?: string) => void;
  chevron?: boolean;
}) {
  return (
    <div>
      {props.område.sider.slice(0, 2).map((side) => (
        <ChevronKnapp
          small={true}
          onClick={() => props.hanldeNaviger(props.område, side)}
        >
          {props.chevron && <HoyreChevron />} {side}
        </ChevronKnapp>
      ))}
      <MenyKnapp small={true} onClick={() => props.hanldeNaviger(props.område)}>
        Mer..
      </MenyKnapp>
    </div>
  );
}

function PopDown(props: Props) {
  const [context] = useDemoContext();
  const { navigerTil } = useNavigasjon();

  const handleNaviger = (område: OmrådeI, side?: string) => {
    navigerTil(område, side);
    props.lukkMeny();
  };

  return (
    <Style kortMeny={!context.langMeny}>
      {menuData.områder.map((område) => (
        <div>
          <MenyKnapp onClick={() => handleNaviger(område)}>
            {context.visIkoner && område.ikon}
            {område.title}
          </MenyKnapp>
          {context.langMeny && (
            <UndersiderStyle>
              <Undersider område={område} hanldeNaviger={handleNaviger} />
            </UndersiderStyle>
          )}
        </div>
      ))}
    </Style>
  );
}

export default PopDown;
