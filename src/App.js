import Landscape from "./Landscape";
import Toys from "./Toys";
// import Table from "./Table";
import * as React from "react";
import { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
// import MotionBackground from "./motion";

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };
  return (
    // <div>
    // <MotionBackground />
    <ChakraProvider>
      <div className="app-container" style={{ textAlign: "center" }}>
        <div className="title-container"> Streaming Stack</div>
        <Tabs
          index={tabIndex}
          onChange={handleTabsChange}
          position="relative"
          variant="unstyled"
        >
          <TabList justifyContent="center" style={{ margin: "10px 0" }}>
            <Tab
              _selected={{ color: "black" }}
              style={{ padding: "30px 30px" }}
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
                Landscape
              </span>
            </Tab>
            <Tab
              _selected={{ color: "black" }}
              style={{ padding: "30px 30px" }}
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
                Toys
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
    // </div>
  );
}

export default App;
