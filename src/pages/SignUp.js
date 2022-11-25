import React, {useState} from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';


export const SignUp = () => {
    const navigate = useNavigate();
    const {SignUp} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordconfirmation, setPasswordConfirmation] = useState ('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(element) {
        element.preventDefault();

        setLoading(true);

        if (password.length <6) {
            alert('Sua senha deve ter mais de 6 dígitos!')
            setLoading(false);
            return;
        }

        if(password !== passwordconfirmation) {
            alert('Suas senhas não conferem!')
            setLoading(false);
        }

        try{
            await SignUp(email, password);
            navigate('/')
        } catch (error) {
            alert('Ocorreu um erro ao tentar criar o usuário!');
        }

        setLoading(false);
    }

    return (
        <div className='container'>
            <h2> Criar conta! </h2>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                type='Email'
                value={email}
                onChange= {(element)=> setEmail(element.target.value)}
                />

                <label>Senha</label>
                <input 
                type='Password'
                value={password}
                onChange={(element) => setPassword(element.target.value)}
                />

                <label>Confirme sua senha</label>
                <input 
                type='password'
                value={passwordconfirmation}
                onChange={(element) => setPasswordConfirmation(element.target.value)}
                />

                <button disabled={loading} className='button-block' type='submit'>Criar conta</button>
            </form>
            <div className='center'>
            <div>
                <p>
                    Já possui uma conta? <Link to='/userlogin'> Login</Link>
                </p>
            </div>
            </div>
        </div>

    );
};