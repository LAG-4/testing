import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import "@fontsource/exo"; // Install via npm or yarn: npm install @fontsource/exo

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
