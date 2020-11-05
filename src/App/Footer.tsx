import * as React from "react";
import styled from "styled-components";
import { theme } from "../theme";

const Style = styled.div`
  min-height: 6rem;
  border-top: 0.2rem solid ${theme.colors.navLysBla};
`;

function Footer() {
  return <Style></Style>;
}

export default Footer;
