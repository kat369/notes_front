
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Register from './components/register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />}/>
          <Route path="dashboard" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
