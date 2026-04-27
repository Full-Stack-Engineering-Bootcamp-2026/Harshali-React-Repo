import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavigationProvider from './context/navigation.jsx'; // 👈 ADD THIS

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavigationProvider>   {/* 👈 ADD THIS */}
      <App />
    </NavigationProvider>
  </StrictMode>,
)