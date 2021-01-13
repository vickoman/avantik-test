import React, { useContext } from 'react';
import './assets/main.css';
import { AppContext } from './Context/UserContextProvider';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const {user} = useContext(AppContext)
  return user ? (
      <Home />
    ) : (
      <Login />
    );
}

export default App;
