import React, { useState } from "react";
import {Link} from 'react-router-dom';
import { useAuth } from "../context/authContext";
import { useNavigate } from 'react-router-dom';

export const ForgotPassword = () => {
    const navigate = useNavigate();
    const {resetPassword} = useAuth();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(element) {
        element.preventDefault();

        setLoading(true);

        try {
            await resetPassword(email);
            alert('Email de recuperação de senha foi enviado com sucesso! Cheque seu email!')
            navigate('/userlogin')
        } catch(error) {
            alert('Ocorreu um errou ao enviar o email de recuperar sua senha!')

        }

        setLoading(false);
    }
    
 return (
    <div className="container">
        <h1> Recuperação de senha</h1>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input 
            type='email' 
            value={email}
            onChange={(element) => setEmail(element.target.value)}
            />
            <button className="button-block">Recuperar senha</button>
        </form>
        
         <div className="center">
            <div>
            <p>
                Já tem uma conta? <Link to='/userlogin'>Entrar</Link>
            </p>
            <p>
                Não tem uma conta? <Link to='/signup'>Cadastre-se</Link>
            </p>
            </div>
         </div>

    </div>
 )
}
