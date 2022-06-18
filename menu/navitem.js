import { Flex, Icon, Link, Menu, MenuButton, Text } from "@chakra-ui/react";
import Profile from "./profile";


function handleOnClick () {
    alert("onclicked");

}

export default function NavItem({icon, title, active, user}) {
    return (
        <Flex
        mt={30}
        flexDir="column"
        w="100%"
        alignItems="flex-start"
        >
            <Menu placement="right">
                <Link
                backgroundColor={active && "#AEC8CA"}
                p={3}
                borderRadius={8}
                _hover={{textDecor:'none', backgroundColor:"#AEC8CA"}}
                href='/menuaction'
                >
                <MenuButton w="100%">
                    <Flex>
                        <Icon as={icon} fontSize="xl" color={active ? "#B2AAAD" : "gray.500"}/>
                        <Text ml={5} >{title}</Text>
                    </Flex>
                </MenuButton>
                </Link>
            </Menu>
        </Flex>
    );
}