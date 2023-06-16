import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'styles/style.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider as WrapBalancerProvider } from 'react-wrap-balancer';

// react query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WrapBalancerProvider>
        <Router>
          <App />
        </Router>
      </WrapBalancerProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
