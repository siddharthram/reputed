import { useMoralis } from "react-moralis";
import { Flex, Text, Button, Box, Tabs, TabList, Tab } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import NavBar from "./navbar";
import LoggedIn from "./dashboard";
import Dashboard from "./dashboard";
import { MoralisContext } from "react-moralis";
import  UserContext  from "../store/usercontext";
import { useContext } from "react";


async function handleAuth(authenticate, setUsers) {
  const response = await authenticate({
    signingMessage: "Please allow Reputed to connect your wallet",
  });
  const user = response;
  console.log("user is", user.get('ethAddress'));
  setUsers(user);
}

export default function Login3() {
  const { 
    isAuthenticated, 
    authenticate, 
    user, 
    logout, 
    isLoggingOut } = useMoralis();
    const {users, setUsers} = useContext(UserContext);
    console.log("usestate", setUsers );

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
            onClick={() => handleAuth(authenticate, setUsers)}
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