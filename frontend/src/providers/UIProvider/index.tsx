import { ReactNode } from "react";
import MyChakraProvider from "./uiProviders/MyChakraProvider";

export const UIProvider = ({ children }: { children: ReactNode }) => {
    return (
        <MyChakraProvider>
            {children}
        </MyChakraProvider>
    )
}

export default UIProvider;
