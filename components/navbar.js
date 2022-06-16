import { Button, Center, Flex, Text } from "@chakra-ui/react";

export default function NavBar({ user, logout, isLoggingOut }) {
  //{user} === const user = props{user}

return (
    <>
      <header>
        <Flex px="10" py="6" justifyContent="space-between" bg="purple.400">
          <Center>
            <Text fontSize="xl" fontWeight="bold">
              Reputed.xyz
            </Text>
          </Center>
          <Center>
            <Text>{user.getUsername()}</Text>
            <Button
              ml="4"
              colorScheme="purple"
              onClick={logout}
              disable={isLoggingOut}
              >
              Logout
            </Button>
          </Center>
        </Flex>
      </header>
    </>
  );
}
