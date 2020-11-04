import * as React from "react";
import styled, { css } from "styled-components/macro";
import { theme } from "../theme";

const removeButtonStyle = css`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const IkonButtonStyle = styled.button`
margin-left: 1rem;
  ${removeButtonStyle};
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50%;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.navBla};
  &:hover {
    opacity: 0.7;
  }
`;

const StyledSvg = styled.svg`
  margin-right: .5rem;
  height: 1.3em;
  stroke: currentColor;
  stroke-width: 0.4;
  stroke-linecap: round;
`;

interface Props {
  isOpen?: boolean;
  label: string;
}

function MenyButton(props: React.HTMLAttributes<HTMLButtonElement> & Props) {
  const { isOpen, label, ...rest } = props;

  return (
    <IkonButtonStyle aria-expanded={isOpen} {...rest}>
      <InnholdIkon isOpen={isOpen} />
      <span>{props.label}</span>
    </IkonButtonStyle>
  );
}

function InnholdIkon(props: { isOpen?: boolean }) {
  if (props.isOpen) {
    return (
      <StyledSvg viewBox="0.5 0.5 3 3">
        <path d="M 1.2 1.2 L 2.8 2.8" />
        <path d="M 1.2 2.8 L 2.8 1.2" />
      </StyledSvg>
    );
  }

  return (
    <StyledSvg viewBox="0.5 0.5 3 3">
      {[1,2,3].map((i) => <path d={`M 1 ${i} L 3.3 ${i}`} />)}
    </StyledSvg>
  );
}

export default MenyButton;
