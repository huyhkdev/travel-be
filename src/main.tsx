import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import "leaflet/dist/leaflet.css";

const queryClient = new QueryClient();

import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
       <QueryClientProvider client={queryClient}>
         <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
)
