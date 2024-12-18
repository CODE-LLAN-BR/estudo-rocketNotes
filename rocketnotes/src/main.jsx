import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {Details} from './pages/Details'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Details/>
  </StrictMode>,
)
