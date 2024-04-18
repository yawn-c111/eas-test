import { ReactNode } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { colors } from "@/components/uiColors";

const uiTheme = extendTheme({
  fonts: {},
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors,
  styles: {
    global: {
      body: {
        color: colors.text.white,
      },
    },
  },
});

export const MyChakraProvider = ({ children }: { children: ReactNode }) => {
    return (
        <ChakraProvider theme={uiTheme}>
            {children}
        </ChakraProvider>
    )
}

export default MyChakraProvider;
