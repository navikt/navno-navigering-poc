import * as React from "react";
import styled from "styled-components/macro";
import { useNavigasjon } from "./useNavigasjon";
import { useBrukertestContext } from "../brukertest/brukertestState";
import Gratulerer from "../brukertest/Gratulerer";

const Style = styled.div`
  margin: auto;
  margin-top: 2rem;
  padding: 1rem;
  max-width: 45rem;
  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  h3 {
    font-size: 1.5rem;
    margin-top: 2.5rem;
  }
`;

function Side() {
  const { side, område } = useNavigasjon();
  const [state] = useBrukertestContext();

  const mål = state.oppgave?.side === side && state.oppgave?.område === område;

  return (
    <>
      <Style>
        <h2>{side}</h2>
        {mål && <Gratulerer />}
        {[...new Array(10)].map(() => (
          <>
            <h3>Tittel</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
              adipisci amet commodi consequatur debitis delectus dolorem dolores
              ducimus esse ex facilis fuga laboriosam maiores modi mollitia
              nesciunt obcaecati officia pariatur placeat quod sapiente sint
              suscipit tempore vel vero vitae voluptatibus? Alias autem laborum
              quaerat suscipit!
            </p>
          </>
        ))}
      </Style>
    </>
  );
}

export default Side;
