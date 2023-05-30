import './css/alt.css';

import {Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  let navigate = useNavigate();

  useEffect(()=>{
    
    if (window.location.pathname === '/') {
      navigate('/')
    } else { console.log('unknow location') }

  }, [navigate]);

  return (
    <>
     
        <Routes>
          
          
          <Route exact path='/' element={<Home/>} />
          <Route  path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />

          <Route path="/" render={() => <Navigate to="/" />} />

        </Routes>
     
    </>
  );
}

export default App;