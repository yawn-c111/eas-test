import { ReactNode } from "react";
import MyWeb3ModalProvider from "./web3Providers/MyWeb3ModalProvider";

export const Web3Provider = ({ children }: { children: ReactNode}) => {
  return (
    <MyWeb3ModalProvider>
        {children}
    </MyWeb3ModalProvider>
  )
}

export default Web3Provider;