import TabContainer from "./tabcontainer";
import {Divider, Text} from "@chakra-ui/react";
import { useERC20Balances, useMoralis, useMoralisWeb3Api } from "react-moralis";
import { useEffect, useState } from "react";
import Moralis from "moralis";


export default function Balance({user}) {
const web3API = useMoralisWeb3Api();
const {fetchERC20Balances, data} = useERC20Balances();
const [ethBalance, setEthBalance] = useState(0);

const fetchNativeBalance = async() => {
    const result = await web3API.account.getNativeBalance({
        chain: "rinkeby",
        address: user.get("ethAddress")
    }).catch((e) => {
        console.log(e);
    });
    if (result.balance) {
    setEthBalance(Moralis.Units.FromWei(result.balance));
    }
}

useEffect(() => {
    fetchNativeBalance();
    fetchERC20Balances({
        chain: "rinkeby",
        address: user.get("ethAddress")
    })
},[]);

    return (
        <TabContainer>
            <Text mb="6" fontSize="xl" fontWeight="bold"> My ERC20 Tokens</Text>
            {ethBalance && <Text> {ethBalance} <b>ETH </b>  </Text>}
            <Divider/>
            {data && data.map(token=> (
                <div key={token.symbol}>
                {<Text> {Moralis.Units.FromWei(token.balance)} <b>{token.symbol} </b> </Text> }
                </div>
            ))}

            <Divider/>



        </TabContainer>

    );
}