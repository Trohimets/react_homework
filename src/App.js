import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from './pages/Main.jsx'
import { Registration } from './pages/Registration.jsx'
import { Login } from './pages/Login.jsx'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/registration" element={<Registration/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
    );
}

export default App;
