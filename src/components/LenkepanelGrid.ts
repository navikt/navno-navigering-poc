import styled from "styled-components";

export const Grid = styled.div`
padding: .5rem;
  margin: auto;
  margin-top: 1rem;
  max-width: 60rem;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 24rem));
  grid-gap: 1.5rem;
  .lenkepanel {
    margin-bottom: 0;
    h3 {
      margin-top: .5rem;
    }
    p {
      margin-bottom: .5rem;
    }
  }
`;
