import Landscape from "./Landscape";
import Toys from "./Toys";
// import Table from "./Table";
import * as React from "react";
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
  return (
    <ChakraProvider>
      <div className="app-container" style={{ textAlign: "center" }}>
        <div className="title-container"> Stream Sprawl Landscape </div>
        <Tabs position="relative" variant="unstyled">
          <TabList justifyContent="center" style={{ margin: "10px 0" }}>
            <Tab
              _selected={{ color: "black" }}
              style={{ padding: "30px 30px" }}
            >
              Landscape
            </Tab>
            {/* <Tab
              _selected={{ color: "white", bg: "blue.900" }}
              style={{ padding: "25px 70px" }}
            >
              Database
            </Tab> */}
            <Tab
              _selected={{ color: "black" }}
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
            {/* <TabPanel>
              <Table />
            </TabPanel> */}
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
