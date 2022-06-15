import {Button, Center, Flex, Text } from "@chakra-ui/react";

export default function Header({user, logout}) {
    //{user} === const user = props{user}
    return (
        <>
    <header>
        <Flex>
            <Center>
                <Text> Dashboard3</Text>
                <Center>
                    <Text>{user.getUsername()}</Text>
                    <Button onClick={logout}> Logout </Button>
                </Center>
            </Center>
        </Flex>     
    </header>
    </>
    );
}