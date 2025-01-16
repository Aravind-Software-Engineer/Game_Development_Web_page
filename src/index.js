import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contact from './Contact'
import About from './About'
import Projects from './Projects'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='/Projects' element={<Projects/>}></Route>
    <Route path='/About' element={<About/>}></Route>
  </Routes>
  </BrowserRouter>
);
