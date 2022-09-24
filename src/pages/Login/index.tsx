import React, { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Métodos para pegar dados do input
    // 1 - Cirando função para pegar dados do input
    // 2 - Utilizando o event inline no próprio input
    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    // Exemplo se fosse pegar o value do input password com uma função
    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        if(email && password) {
            const isLogged = await auth.signin(email, password);
            if(isLogged) {
                navigate('/');
            } else {
                alert("Não está funcionando!");
            }
        }
    }

    return (
        <div>
            <h2>Página Fechada</h2>

            <input 
                type="text" 
                value={email} 
                onChange={handleEmailInput}
                placeholder="Digite seu e-mail" 
            />
            <input 
                type="text" 
                value={password} 
                onChange={handlePasswordInput}
                placeholder="Digite sua senha" 
            />
            <button onClick={handleLogin}>Logar</button>
        </div>
    )
}