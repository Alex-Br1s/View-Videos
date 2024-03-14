/* eslint-disable @typescript-eslint/ban-ts-comment */
import {auth} from '../firebase/firebase.config'
import { createContext, useContext } from 'react'
import{GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'


//@ts-ignore
// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(authContext)
    if(!context) {
    console.log('Error creando el contexto')
    }
    else {
        return context
    }
}

export function AuthProvider ({children}) {

    const loginWithGoogle = async () => {
        const responseGoogle = new GoogleAuthProvider()
        return await signInWithPopup(auth, responseGoogle)
    };
    const logout = async () => {
        const response = await signOut(auth);
        console.log(response)
    }
    return <authContext.Provider value={{loginWithGoogle, logout}}>
        {children}
    </authContext.Provider> 
}