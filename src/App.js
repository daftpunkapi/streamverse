import Landscape from "./Landscape";
import Toys from "./Toys";
import * as React from "react";
import { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  ChakraProvider,
} from "@chakra-ui/react";
import "./App.css";
import { BiLandscape } from "react-icons/bi";
import { GiAndromedaChain } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };
  return (
    <ChakraProvider>
      <div className="app-container" style={{ textAlign: "center" }}>
        <div className="title-container">Streaming Stack</div>
        <div className="header-icons">
          <a
            href="https://bxbivc.substack.com/p/on-the-fly"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <SiSubstack className="icon" />
          </a>
          <a
            href="https://github.com/daftpunkapi"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaGithub className="icon" />
          </a>
        </div>

        <Tabs
          index={tabIndex}
          onChange={handleTabsChange}
          position="relative"
          variant="unstyled"
        >
          <TabList justifyContent="center" style={{ margin: "10px 0" }}>
            <Tab
              _selected={{ color: "black" }}
              style={{
                padding: "30px 30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  padding: "5px",
                  borderRadius: "5px",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  if (tabIndex !== 0) {
                    e.target.style.backgroundColor = "lightgrey";
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <BiLandscape
                    style={{ marginRight: "5px", fontSize: "30px" }}
                  />
                  Landscape
                </div>
              </span>
            </Tab>
            <Tab
              _selected={{ color: "black" }}
              style={{
                padding: "30px 30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  padding: "5px",
                  borderRadius: "5px",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  if (tabIndex !== 1) {
                    e.target.style.backgroundColor = "lightgrey";
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <GiAndromedaChain
                    style={{ marginRight: "5px", fontSize: "30px" }}
                  />
                  Toys
                </div>
              </span>
            </Tab>
          </TabList>
          <TabIndicator
            mt="-25px"
            height="4px"
            bg="#00668c"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <Landscape />
            </TabPanel>
            <TabPanel>
              <Toys />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </ChakraProvider>
  );
}

export default App;
