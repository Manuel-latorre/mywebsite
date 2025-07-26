import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import App from '@/App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { registerServiceWorker } from './lib/sw-registration'
import { SpeedInsights } from "@vercel/speed-insights/react"

// Registrar Service Worker solo en producción
registerServiceWorker();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SpeedInsights />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
