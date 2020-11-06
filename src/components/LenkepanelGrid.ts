import styled from "styled-components";

export const LenkepanelGrid = styled.div`
  padding: 3rem 0.5rem 4rem;
  margin: 1rem auto auto;
  max-width: 60rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 60em) {
    grid-template-columns: 1fr;
  }
  grid-gap: 1.5rem;
  .lenkepanel {
    margin-bottom: 0;
    h3 {
      margin-top: 0.5rem;
    }
    p {
      margin-bottom: 0.5rem;
    }
  }
`;
