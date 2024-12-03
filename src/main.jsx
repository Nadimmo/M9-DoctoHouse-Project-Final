import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Router from './Route/Route'
import AuthProvider from './AuthProvider/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}> 
    <AuthProvider>
    <RouterProvider router={Router} />  
    </AuthProvider>
    </QueryClientProvider>
</StrictMode>,
)
