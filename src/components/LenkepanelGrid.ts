import styled from "styled-components";

export const Grid = styled.div`
  padding: 1.5rem;
  margin: auto;
  margin-top: 3rem;
  max-width: 50rem;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 20rem));
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
