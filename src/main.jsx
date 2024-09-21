import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from "axios"

// Set the base URL for API requests
axios.defaults.baseURL = "https://password-reset-backend-23iq.onrender.com/api/user"; // Adjust according to your setup


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
