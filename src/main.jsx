import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pag/Home'
import About from './pag/Home/about'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,

  <StrictMode>
    <About />
  </StrictMode>

)
