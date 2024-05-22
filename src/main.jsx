import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CardProvider from './providers/CardProvider.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>

    <CardProvider >

    <App />
    
    </CardProvider>
    <Toaster
  position="top-right"
  reverseOrder={false}/>
    </div>
  </React.StrictMode>,
)
