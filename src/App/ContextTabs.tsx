import Område from "./Område";
import { getOmrådeFraTittel } from "../data/menuDataUtils";
import { theme } from "../theme";
import styled from "styled-components/macro";
import React, { useState } from "react";
import ForsideInnhold from "./ForsideInnhold";
import Panel from "nav-frontend-paneler";
import Tabs from "nav-frontend-tabs";

const TabWrapper = styled.div`
  .nav-frontend-tabs {
    border-bottom: none;
  }
  margin-bottom: 5rem;
`;

const StyledTabs = styled(Tabs)`
  margin-top: 1rem;
  .nav-frontend-tabs__tab-inner--aktiv {
    background: rgba(0, 103, 197, 0.32);
    border-bottom-color: ${theme.colors.navLysBla};
  }
`;

const StyledPanel = styled(Panel)`
  .lenkepanel {
    border: none;
  }
  padding: 0 1rem;
  background: rgba(0, 103, 197, 0.32);
  margin-bottom: 1rem;
`;

function ContextTabs() {
  const [selectedTab, setSelectedTab] = useState("Privatperson");
  const onTabChange = (e: any) => {
    setSelectedTab(e.target.textContent);
  };

  return (
    <TabWrapper>
      <StyledTabs
        tabs={[
          { label: "Privatperson" },
          { label: "Arbeidsgiver" },
          { label: "Samarbeidspartner" },
        ]}
        onChange={onTabChange}
      />
      <StyledPanel border>
        {selectedTab === "Privatperson" ? (
          <ForsideInnhold />
        ) : (
          <Område område={getOmrådeFraTittel(selectedTab)!} />
        )}
      </StyledPanel>
    </TabWrapper>
  );
}

export default ContextTabs;
