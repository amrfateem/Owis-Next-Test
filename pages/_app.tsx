import { QueryClientProviderWrapper } from "../queryClient";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app"; 
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <QueryClientProviderWrapper>
        <Component {...pageProps} />
      </QueryClientProviderWrapper>
    </ChakraProvider>
  );
}

export default MyApp;
