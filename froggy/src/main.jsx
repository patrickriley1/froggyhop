import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Gamestart from './Gamestart.jsx' // create this file
import Level1 from './Levels/Level1.jsx' 
import './index.css'
import About from './About.jsx' // create this file
import Store from './Store.jsx' // create this file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gamestart" element={<Gamestart />} />
        <Route path="/Level1" element={<Level1 />} /> {/* create this file */}
        <Route path="/About" element={<About />} /> {/* create this file */}
        <Route path="/Store" element={<Store />} /> {/* create this file */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
