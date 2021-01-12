import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const [currentUser, setcurrentUser] = useState<string|null>(null);

  const handleLogin = (user:string) => {
    setcurrentUser(user)
  };

  const handleLogout = () => {
    setcurrentUser(null);
  }
  
  return currentUser ? (
      <Home />
    ) : (
      <Login />
    );
}

export default App;
