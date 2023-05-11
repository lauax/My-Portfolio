import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import { HomePage } from './pages/HomePage'
import { NotFound } from './pages/NotFound'
import { PortfolioPage } from './pages/PortfolioPage'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="portfolio" element={<PortfolioPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider>
    <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>,
)
