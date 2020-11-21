import * as React from "react";
import styled from "styled-components/macro";
import { useDemoContext } from "../DemoControlls/demoContext";
import { theme } from "../theme";
import { menuData } from "../data/menuData";
import { Undersider } from "./Meny/Undersider";
import { useNavigasjon } from "./useNavigasjon";

const Style = styled.div`
  padding: 1.5rem;
  min-height: 6rem;
  border-top: 0.2rem solid ${theme.colors.navLysBla};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));
  grid-gap: 1rem;
  justify-content: center;
  box-shadow: 0 1rem 1rem #888;
`;

const Button = styled.div`
  background-color: transparent;
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: ${theme.colors.navBla};
  }
`;

function Footer() {
  const [demoContext] = useDemoContext();
  const { navigerTil } = useNavigasjon();

  const footerContent = menuData.områder.filter(
    (område) => område.footerKandidat
  );

  return (
    <Style>
      {demoContext.footerNavigering &&
        footerContent.map((område) => (
          <div key={område.title}>
            <Button onClick={() => navigerTil(område)}>{område.title}</Button>
            <Undersider område={område} />
          </div>
        ))}
    </Style>
  );
}

export default Footer;
