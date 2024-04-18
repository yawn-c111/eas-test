import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' 
import { WagmiProvider } from 'wagmi' 
import { config } from '../config' 

const queryClient = new QueryClient() 

export default function App({ Component, pageProps }: AppProps) {
  return (
  <WagmiProvider config={config}> 
    <QueryClientProvider client={queryClient}> 
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  </WagmiProvider>
  )
}
