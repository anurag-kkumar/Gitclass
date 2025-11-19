import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "leaflet/dist/leaflet.css";

import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify'

import { UserProvider } from "./context/UserContext";  // ✅ add this

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserProvider>   {/* ✅ wrap the entire app */}
      <App />
      <ToastContainer />
    </UserProvider>
  </BrowserRouter>
)
