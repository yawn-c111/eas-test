import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http, createConfig, WagmiProvider } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})

const queryClient = new QueryClient() 

export const MyWagmiProvider = ({ children }: { children: ReactNode}) => {
  return (
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}> 
      {children}
    </QueryClientProvider>
  </WagmiProvider>
  )
}

export default MyWagmiProvider;