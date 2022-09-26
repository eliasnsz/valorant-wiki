import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    duration: 900,  
    easing: 'ease-out',
    delay: 100,
    once: true,
    offset: 50
  });

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
