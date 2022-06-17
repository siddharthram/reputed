import { useMoralis } from "react-moralis";
import { Flex, Text, Button, Box, Tabs, TabList, Tab } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import NavBar from "./navbar";
import LoggedIn from "./dashboard";
import Dashboard from "./dashboard";

function handleAuth(authenticate) {
  authenticate({
    signingMessage: "Please allow Reputed to connect your wallet",
  });
}

export default function Login() {
  const { isAuthenticated, authenticate, user, logout, isLoggingOut } =
    useMoralis();
  console.log(isAuthenticated);
  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Login | Dashboard </title>
        </Head>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          width="100vw"
          height="100vw"
          bgGradient="linear(to-br,teal.400, purple.300)"
        >
          <Text fontSize="7xl" fontWeight="bold" color="White">
            Reputed.xyz
          </Text>
          <Text fontSize="3xl" color="White" mt="6">
            Your Web3 Business profile
          </Text>

          <Button
            colorScheme="purple"
            size="lg"
            mt="20"
            onClick={() => handleAuth(authenticate)}
          >
            Login with Metamask
          </Button>
        </Flex>
      </>
    );
  } else {
    return (
      <Dashboard user={user} logout={logout} isloggingout={isLoggingOut}/>
    );
  }
}
     /*  <>
        <Head>
          <title> Reputed.xyz </title>
        </Head>
        <Flex direction="column" width="100vw" height="100vw">
          <NavBar user={user} logout={logout} isloggingout={isLoggingOut} />
          <Box flex="1" bg="purple.100" px="44" py="20">
            <Tabs>
              <TabList>
                <Tab fontWeight="bold"> Profile </Tab>
                <Tab fontWeight="bold"> Balance </Tab>
                <Tab fontWeight="bold"> Transactions </Tab>
                <Tab fontWeight="bold"> NFTs </Tab>
                <Tab fontWeight="bold"> Send ETH </Tab>

              </TabList>
            </Tabs>
          </Box>
        </Flex>
      </>
    ); 
  }
    );
}
*/