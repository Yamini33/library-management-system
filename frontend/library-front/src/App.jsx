// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';

import './App.css';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      {/* <Header />   */}
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/user-dashboard" element={<UserDashboard />}/>
           <Route path="/admin-dashboard" element={<AdminDashboard />}/>

          
        </Routes>
      </div>
    </Router>
  );

}


export default App;
