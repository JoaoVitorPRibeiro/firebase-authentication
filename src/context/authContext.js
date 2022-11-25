import React, {createContext, useState, useEffect, useContext} from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateEmail, sendPasswordResetEmail} from 'firebase/auth';
import { auth } from "../firebase";


const AuthContext = createContext();

export function useAuth (){
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [CurrentUser, setCurrentUser] = useState();

    function SignUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function signIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email)
    }

    function updateEmailAddress(newEmail) {
        return updateEmail(CurrentUser,newEmail)
    }

    function logOut(){
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            setCurrentUser(user);
        });
        return unsubscribe;
    },[]);

    return (
        <AuthContext.Provider 
        value={{
            SignUp: SignUp,
            signIn: signIn,
            logOut: logOut,
            CurrentUser: CurrentUser,
            updateEmailAddress: updateEmailAddress,
            resetPassword: resetPassword,
        }}>
            {children}
        </AuthContext.Provider>
    );
}