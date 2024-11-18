// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signup from './Component/SignUp';
import Login from './Component/LogIn';
import TodoList from './Component/TodoList';
import PrivateRoute from './Component/PrivateRoute';
import PublicRoute from './Component/PublicRoute';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<PublicRoute><Signup/></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><Login/></PublicRoute>} />
        <Route path="/todos" element={<PrivateRoute><TodoList/></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
