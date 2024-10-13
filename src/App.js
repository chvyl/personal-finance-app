// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login'; // Đảm bảo bạn đã tạo file Login.js
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Login />} /> {/* Redirect đến trang đăng nhập khi vào trang chủ */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
