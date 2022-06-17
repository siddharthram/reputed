import { Box } from "@chakra-ui/react";


export default function TabContainer({children}) {
    return(
        <Box bg="white" height="full" width="full" px="20" py="10" rounded="lg" shadow="lg" textAlign="left">
            {children}
        </Box>
    )
}
