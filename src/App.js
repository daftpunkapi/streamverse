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
import { AiTwotoneCalendar } from "react-icons/ai";

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };
  return (
    <ChakraProvider>
      <div className="app-container" style={{ textAlign: "center" }}>
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
        <div className="title-container">STREAMING STACK</div>
        <Tabs
          index={tabIndex}
          onChange={handleTabsChange}
          position="relative"
          variant="unstyled"
        >
          <TabList justifyContent="center" style={{ margin: "0" }}>
            <Tab
              _selected={{ color: "#ffecda" }}
              style={{
                color: "#ffecda",
                padding: "30px 30px",
                display: "flex",
                alignItems: "center",
                fontFamily: "Chakra Petch",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <BiLandscape style={{ marginRight: "5px", fontSize: "30px" }} />
                Landscape
              </div>
            </Tab>
            <Tab
              _selected={{ color: "#ffecda" }}
              style={{
                color: "#ffecda",
                padding: "30px 30px",
                display: "flex",
                alignItems: "center",
                fontFamily: "Chakra Petch",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <GiAndromedaChain
                  style={{ marginRight: "5px", fontSize: "30px" }}
                />
                Solutions
              </div>
            </Tab>
          </TabList>
          <TabIndicator
            mt="-25px"
            height="4px"
            bg="#FF4D4D"
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
