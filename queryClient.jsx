import { QueryClient, QueryClientProvider } from 'react-query';

export const queryClient = new QueryClient();

export const QueryClientProviderWrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
