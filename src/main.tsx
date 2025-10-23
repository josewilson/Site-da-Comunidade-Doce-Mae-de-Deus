import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
// Defer non-critical Bootstrap JS to idle to reduce initial JS cost
import { loadBootstrapWhenIdle } from './utils/bootstrap'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Load Bootstrap JS after initial render/idle
loadBootstrapWhenIdle()
