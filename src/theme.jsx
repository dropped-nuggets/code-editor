import {extendTheme} from "@chakra-ui/react"

const Theme = extendTheme({
  config: {
initialColorMode: "dark",
useSyncColorMode:false,
  },
});

export default Theme