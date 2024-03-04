import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import {  QueryClient, QueryClientProvider } from 'react-query';
import { AppContextProvider } from './contexts/AppContext';

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      retry:0,
    },
  }
})

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  
  <QueryClientProvider client={queryClient}>
    <AppContextProvider>
  <App />
  </AppContextProvider>
  </QueryClientProvider>
   
  
);
