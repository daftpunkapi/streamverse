import Landscape from "./Landscape";
import Toys from "./Toys";
// import Table from "./Table";
import * as React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <div className="app-container" style={{ textAlign: "center" }}>
        <div className="title-container">
          <h1
            style={{
              fontSize: "36px",
              letterSpacing: "2px",
              padding: "50px",
            }}
          >
            🚀 Welcome to the World of Streaming 🚀
          </h1>
        </div>
        <Tabs variant="enclosed">
          <TabList justifyContent="center" style={{ margin: "20px 0" }}>
            <Tab
              _selected={{ color: "black", bg: "#b6ccd8" }}
              style={{ padding: "25px 70px" }}
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
              _selected={{ color: "black", bg: "#b6ccd8" }}
              style={{ padding: "25px 70px" }}
            >
              Toys
            </Tab>
          </TabList>
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
