import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'

import "remixicon/fonts/remixicon.css"
import Preloader from './components/Preloader.tsx'

import 'animate.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Preloader />
    <div className='container mx-auto px-4'>
    <Navbar/>
    <App />
    <Footer/>
    </div>

  </StrictMode>,
)
