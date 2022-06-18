import { ChakraProvider } from "@chakra-ui/react";
import { MoralisProvider } from "react-moralis";
import { UserContextProvider} from '../store/usercontext';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider> 
      <MoralisProvider appId={process.env.NEXT_PUBLIC_APPID} 
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}>
         <UserContextProvider>
      <Component {...pageProps} />
      </UserContextProvider>
      </MoralisProvider>
    </ChakraProvider>
  );
}

export default MyApp;
