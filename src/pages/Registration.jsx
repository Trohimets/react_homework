import { RegistrationWrapper } from "./registration.styled";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Registration = () => {
    const navigation = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const registrationHandler = async (e) => {
        e.preventDefault()
        const payload = {email, password}

        const response = await fetch('http://localhost:9002/api/v1/auth/registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        });

        const data = await response.json()

        navigation('/login')
    }
    return <RegistrationWrapper>
<form>
<div>
    <label>Введите адрес электронной почты</label>
    <input type="text" value={email} onChange={emailHandler}/>
</div>
<div>
    <label>Введите пароль</label>
    <input type="text" value={password} onChange={passwordHandler}/>
</div>
<button onClick={registrationHandler}>Зарегистрироваться</button>
</form>
    </RegistrationWrapper>
}