import React from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import './App.css';
import Discover from './componets/Discover';
import Faqs from './componets/Faqs';
import Footer from './componets/Footer';
import Home from './componets/Home';
import Navbar from './componets/Navbar';
import Pricing from './componets/Pricing';


function App() {
  return (
    <Router>
         <div className="App">
   <Navbar/>
   <Routes>
    {/* define routes for each components */}
    <Route path='/' element={<Home/>}/>
    <Route path='discover' element={<Discover/>}/>
    <Route path='pricing' element={<Pricing/>}/>
    <Route path='faqs' element={<Faqs/>}/>
    <Route path='footer' element={<Footer/>}/>

   </Routes>
 
    </div>
    </Router>
 
  );
}

export default App;



