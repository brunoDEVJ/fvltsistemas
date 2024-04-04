import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './output.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/Auth/AuthProvider.tsx'
import { Login } from './pages/Login/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="fvltsistemas.vercel.app/" element={<App />}></Route>
        <Route path="fvltsistemas.vercel.app/login" element={<Login />}></Route>
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)
