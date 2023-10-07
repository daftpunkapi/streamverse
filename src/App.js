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

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };
  return (
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
              _hover={tabIndex !== 0 ? { backgroundColor: "lightgrey" } : {}}
              style={{ padding: "30px 30px" }}
            >
              Landscape
            </Tab>
            <Tab
              _selected={{ color: "black" }}
              _hover={tabIndex !== 1 ? { backgroundColor: "lightgrey" } : {}}
              style={{ padding: "30px 30px" }}
            >
              Toys
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
