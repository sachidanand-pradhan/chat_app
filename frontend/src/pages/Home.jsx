import React from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import SignUp from "../components/Authentication/SignUp";

const Home = () => {
  return (
    <Container maxW="xl">
      <Box
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        p={3}
        bg={"white"}
        w={"100%"}
        m={"40px 0 15px 0"}
        borderWidth={"1px"}
        borderRadius={"lg"}
      >
        <Text fontSize={"4xl"} fontFamily="Work sans" color={"black"}>
          Chat App
        </Text>
      </Box>
      <Box background={"white"} borderRadius={"lg"} borderWidth={"1px"} p={4}>
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Home;
