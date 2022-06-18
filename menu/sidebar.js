import { Flex, IconButton } from "@chakra-ui/react";
import {FiHome, FiMenu} from "react-icons/fi";
import NavItem from "./navitem";

export default function Sidebar({user}) {
    return (
        <Flex 
        position="sticky" 
        left="0" 
        
        boxShadow="0 4px 12px 0 rgba(0,0,0,0.5)"
        w="200px"
        flexDir="column"
        justifyContent="space-between">

            <Flex
               p="5%"
               flexDir="column"
               alignItems="flexStart"
               as="nav">
                <IconButton 
                background="none"
                mt={5}
                _hover={{background: 'none'}}
                icon={<FiMenu/>}
                onClick={() => {
                    alert("burger");
                }}
                />
                <NavItem icon={FiHome} title="Profile" active user={user}    />
            </Flex>


            </Flex>
    )
}