import { LoginWrapper } from "./login.styled"
import { useState } from "react";

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const loginHandler = async (e) => {
        e.preventDefault()
        const payload = {email, password}
        
        try {
            const response = await fetch('http://localhost:9002/api/v1/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(payload)
                });
            const data = await response.json()
            const { token } = data
            login(token)
        } catch (e) {
            console.log(e)
        }
        

        const data = await response.json()

        navigation('/login')
    }

    return (
        <LoginWrapper>
            <form>
            <div>
                <label>Введите адрес электронной почты</label>
                <input type="text" value={email} onChange={emailHandler}/>
            </div>
            <div>
                <label>Введите пароль</label>
                <input type="text" value={password} onChange={passwordHandler}/>
            </div>
            <button onClick={loginHandler}>Войти</button>
            </form>
        </LoginWrapper>
    )
}