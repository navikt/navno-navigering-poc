import * as React from "react";
import styled from "styled-components/macro";

interface Props {
  label: string;
  emoji: string;
}

const Style = styled.span`
  font-size: 1.5em;
  margin-left: 0.5rem;
`;

function Emoji(props: Props) {
  return (
    <Style role="img" aria-label={props.label}>
      {props.emoji}
    </Style>
  );
}

export default Emoji;
