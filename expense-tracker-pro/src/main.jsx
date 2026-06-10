// src/main.jsx

// React is the library that lets us build components
import React from 'react'

// ReactDOM is what connects React to the browser
// StrictMode is a development helper that catches bugs early
import ReactDOM from 'react-dom/client'

// App.jsx is the root component — it controls routing
import App from './App.jsx'

// index.css contains global styles
import './index.css'

// Find the <div id="root"> in index.html and render our app inside it
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)