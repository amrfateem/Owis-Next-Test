import { QueryClientProviderWrapper } from "@/queryClient";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <QueryClientProviderWrapper>
        <Component {...pageProps} />
      </QueryClientProviderWrapper>
    </ChakraProvider>
  );
}

export default MyApp;
