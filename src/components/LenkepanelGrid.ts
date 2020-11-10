import styled from "styled-components";

export const LenkepanelGrid = styled.div`
  justify-self: center;
  padding: 3rem 0.5rem 4rem;
  max-width: 60rem;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
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
