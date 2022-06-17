import { Flex, Box, Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react";
import Head from "next/head";
import Balance from "./balance";
import NavBar from "./navbar";
import Profile from "./profile";
import Transactions from "./transactions";

export default function Dashboard({user, logout, isLoggingOut}) {
return (
    <>
      <Head>
        <title> Reputed.xyz </title>
      </Head>
      <Flex direction="column" width="100vw" height="100vw">
        <NavBar user={user} logout={logout} isloggingout={isLoggingOut} />
        {/* flex=1 means take all the remaining space */}
        <Box flex="1" bg="purple.100" px="44" py="20">
          <Tabs size="lg" colorScheme="purple" align="center" variant="enclosed-colored">
            <TabList>
              <Tab fontWeight="bold"> Profile </Tab>
              <Tab fontWeight="bold"> Balance </Tab>
              <Tab fontWeight="bold"> Transactions </Tab>
              <Tab fontWeight="bold"> NFTs </Tab>
              <Tab fontWeight="bold"> Send ETH </Tab>
            </TabList>
            <TabPanels>
              <TabPanel> <Profile user={user}/> </TabPanel>
              <TabPanel> <Balance user={user}/></TabPanel>
              <TabPanel> <Transactions user={user} /> </TabPanel>
              <TabPanel> NFTs</TabPanel>
              <TabPanel> Send ETH</TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
);
}