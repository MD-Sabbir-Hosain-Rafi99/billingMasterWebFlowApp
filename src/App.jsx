// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Admin from './pages/Admin.jsx'
import Salesman from './pages/Salesman.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/salesman" element={<Salesman />} />
    </Routes>
  )
}

export default App