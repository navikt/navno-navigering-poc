import * as React from "react";
import Meny from "./Meny/Meny";
import styled from "styled-components";
import { useAppContext } from "./appContext";

const Style = styled.div`
  margin: auto;
  margin-top: 5rem;
  padding: 1rem;
  max-width: 45rem;
`;

function Side() {
  const [state, dispatch] = useAppContext();

  const side = state.side!;

  return (
    <>
      <Meny />
      <Style>
        <h2>{side}</h2>
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
