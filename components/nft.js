import { useNFTBalances } from "react-moralis";
import TabContainer from "./tabcontainer";
import { useEffect } from "react";
import { Text } from "@chakra-ui/react";


export default function NFT({user}) {

    const { getNFTBalances, data} = useNFTBalances();

    useEffect(()=> {
        getNFTBalances({
            params: {
                chain: "rinkeby",
                address: user.get("ethAddress")
            }
        });
    },[]);
    console.log(data);

    return (
        <TabContainer>
            <Text fontSize="xl" fontWeight="bold">My NFTs</Text>
            {data && data.result.map(nft => {
                <Box mt="4" px="2" py="2" borderWidth="1px" borderRadius="md" key={nft_token.uri}>
                    {nft.image && <Image src={nft.image} />}
                    <p>{nft_token.uri} </p>
                </Box>
            })}

        </TabContainer>
    )
    
}