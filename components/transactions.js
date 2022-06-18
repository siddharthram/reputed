import { useEffect } from "react";
import { useMoralisWeb3Api } from "react-moralis";
import TabContainer from "./tabcontainer";
import { useState } from "react";
import { Divider, Link, Text } from "@chakra-ui/react";

export default function Transactions ({user}) {
    const web3API = useMoralisWeb3Api();
    const ETHER_BASE_URL = "https://rinkeby.etherscan.io/tx/";

    const [transactions, setTransactions] = useState([]);
    const fetchTransactions = async () => {
        const data = await web3API.account.getTransactions({
            chain: "rinkeby",
            address: user.get('ethAddress'),
            limit: 5
        }).catch((e) => {
            console.log(e);
        });
        if (data) {
            setTransactions(data.result);
        }
    }
    useEffect(() => {
        fetchTransactions();
    },[]);
 

    return (
    <TabContainer>
        <Text font="xl" mb="6" fontWeight="bold">My Last 5 Transactions </Text>
        {transactions && transactions.map(tx => (
            <div key={tx.hash}>
                <Link href={`${ETHER_BASE_URL}${tx.hash}`} isExternal> {tx.hash}</Link>
                <Divider/>
            </div>

            ))}
    
    </TabContainer>
    );
}