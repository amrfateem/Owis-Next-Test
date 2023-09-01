import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactNode } from 'react';
import React from 'react';

export const queryClient = new QueryClient();

interface QueryClientProviderWrapperProps {
  children: ReactNode;
}

export const QueryClientProviderWrapper: React.FC<QueryClientProviderWrapperProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
