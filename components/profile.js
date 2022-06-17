import TabContainer from "./tabcontainer";
import { Button, FormControl, FormLabel, Text, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { useMoralis } from "react-moralis";

export default function Profile({ user }) {
    const nameRef = useRef(null);
    const {setUserData, isUserUpdating} = useMoralis();


    async function handleSubmit(e) {
        e.preventDefault();
        const value = nameRef.current.value;
        console.log("new name is", value);

        if (value.trim() !== '') {
          const res = await  setUserData({username: value});
          nameRef.current.value="";

        }
    }

  return (
    <TabContainer>
      <Text><b>Username</b>: {user.getUsername()}</Text>
      <Text><b>Wallet Address:</b>{user.get("ethAddress")}</Text>
    <form onSubmit={handleSubmit}>  
        <FormControl mt="6" mb="6">
            <FormLabel> Set a new User Name </FormLabel>
            <Input id="username" type="text" placeholder="new username" ref={nameRef}/>
        </FormControl>
        <Button type="submit" colorScheme="purple">Change Username</Button>
    </form>
    </TabContainer>

  );
}
