import * as React from "react";
import styled from "styled-components/macro";
import { theme } from "../../theme";
import { OmrådeI } from "../../data/types";
import { useNavigasjon } from "../useNavigasjon";
import { HoyreChevron } from "nav-frontend-chevron";

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
    transform: translateX(0.5rem);
  }
`;

export function Undersider(props: {
  område: OmrådeI;
  onNaviger?: () => void;
  chevron?: boolean;
}) {
  const { navigerTil } = useNavigasjon();

  const handleNaviger = (område: OmrådeI, side?: string) => {
    navigerTil(område, side);
    props.onNaviger?.();
  };

  return (
    <div>
      {props.område.sider.slice(0, 2).map((side) => (
        <ChevronKnapp
          small={true}
          onClick={() => handleNaviger(props.område, side)}
          key={side}
        >
          {props.chevron && <HoyreChevron />} {side}
        </ChevronKnapp>
      ))}
      <MenyKnapp small={true} onClick={() => handleNaviger(props.område)}>
        Mer..
      </MenyKnapp>
    </div>
  );
}

export default Undersider;
