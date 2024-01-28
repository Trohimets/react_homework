import { createContext, useContext, useState } from 'react'


const AuthContext = createContext({})
export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(window.localStorage.getItem('token') || null)
    const navigation = useNavigate()
    const login = (token) => {
        window.localStorage.setItem('token', JSON.stringify(token))
        setUser(JSON.stringify(token))
        navigation('/')
    }

    const logout = () => {
        window.localStorage.removeItem('token')
        setUser(null)
    }

    const isLogin = user !== null

    const authData = {
        user,
        login,
        logout,
        isLogin
    }

    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
}
