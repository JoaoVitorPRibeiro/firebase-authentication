import React from "react";
import { useAuth } from "../context/authContext";
import { useNavigate, Link } from 'react-router-dom';
import { async } from "@firebase/util";

export const UserProfile = () => {

const {CurrentUser, logOut} = useAuth();
const navigate = useNavigate();

async function handleLogout() {
    try{
        await logOut();
        navigate('/userlogin');
    } catch (error) {
        alert('Ocorreu um erro ao realizar o logout!')
    }
}

    return (
        <div className="container">
        <div className="header">
        <h1>Perfil de usuário</h1>
        <button onClick={handleLogout}>Sair</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr>    
                    <td>{CurrentUser.email}</td>
                    <td>
                        <Link to='/update-profile'>Atualizar perfil do usuário</Link>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    );
};