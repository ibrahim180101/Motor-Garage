import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Router/Router'
import { ModalProvider } from './ModalContext/ModalContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalProvider>
      <RouterProvider router={router}></RouterProvider>
    </ModalProvider>
  </StrictMode>,
)
