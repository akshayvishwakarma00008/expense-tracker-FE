import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/users/Login';
import Register from './pages/users/Register';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
