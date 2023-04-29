import AppRoutes from './routes/AppRoutes';

import { QueryClient, QueryClientProvider } from 'react-query';

import GlobalStyle from './style';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <AppRoutes />
    </QueryClientProvider>
  );
}

export default App;
