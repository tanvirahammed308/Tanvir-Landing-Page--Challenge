import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-[720px] md:max-w-[720px] lg:max-w-[1920px]'>

    <App />
    </div>
  </React.StrictMode>,
)
