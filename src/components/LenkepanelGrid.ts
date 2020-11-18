import styled, { css } from "styled-components/macro";

export const LenkepanelGrid = styled.div<{ alignStart: boolean }>`
  justify-self: center;
  padding: 3rem 0.5rem 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  ${(props) =>
    props.alignStart &&
    css`
      align-items: start;
    `};
  @media (max-width: 60em) {
    grid-template-columns: 1fr;
  }
  grid-gap: 1.5rem;
  .lenkepanel {
    margin-bottom: 0;
    h3,
    p {
      margin: 0 0 0.5rem;
    }
  }
`;
