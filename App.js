import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './contact';
import Navbar from './Navbar';
import Stuff from './stuff';
import About from './about';
import Home from './home';
import Product from './product';
import './App.css';

function App() {
  return (
   
   <>
   <Router>
<Navbar/>
<Routes>

<Route path='/' element={<Home/>} />
<Route path='stuff' element={<Stuff/>} />
<Route path='about' element={<About/>} />
<Route path='contact' element={<Contact/>} />
<Route path='product' element={<Product/>}/>
</Routes>
</Router>
</>

  
  );
}

export default App;
