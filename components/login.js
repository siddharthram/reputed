import { useMoralis } from "react-moralis";
import { Flex, Text, Button } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Header from "./Header";

function handleAuth() {
    authenticate();
}

export default function Login() {
  const { isAuthenticated, authenticate, user, logout } = useMoralis();
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
            onClick={() => authenticate({})}
          >
            Login with Metamask
          </Button>
        </Flex>
      </>
    );
  } else {
    return (
      <Header user={user} logout={logout}/>
    );
  }
}
