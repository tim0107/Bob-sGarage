import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './ComponentApp/Header';
import Navbar from './ComponentApp/Navbar';
import Service from './Pages/SERVICE/Service';
import Feedback from './Pages/FEEDBACK/Feedback';
import Login from './Authentication/Login'  ;
import Register from './Authentication/Resgister';
import Contact from './Pages/CONTACT/Contact'
import Admin from './Pages/ADMIN/Admininterface'
import Blog from './Pages/BLOGS/Blogs';
import Staff from './Pages/STAFF/Staff';
import ABout from './Pages/ADMIN/ABOUT/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/services" element={<Service />} /> 
          <Route path="/feedback" element={<Feedback />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/admin" element={<Admin />} /> 
          <Route path="/blogs" element={<Blog/>} /> 
          <Route path="/staffs" element={<Staff/>} /> 
          <Route path="/about" element={<ABout/>} /> 
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
