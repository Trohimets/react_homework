import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Main } from './pages/Main.jsx'
import { Registration } from './pages/Registration.jsx'
import { Login } from './pages/Login.jsx'
import { AuthProvider, useAuthContext } from './context/authContext'


const PrivateRoute = ({children}) => {
  const {isLogin } = useAuthContext()
  // return isLogin === true ? children: navigation('/login')
  if (isLogin === false) {
    return <Navigate to="/login"/>
  }
return children;
}


function App() {
  return (
      <BrowserRouter>
          <AuthProvider>
          <Routes>
        <Route path="/" element={<PrivateRoute><Main/></PrivateRoute>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      </AuthProvider>
      </BrowserRouter>
    );
}

export default App;
