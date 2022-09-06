import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import http from "../api/api";
import { IAuthProvider, IContext, IUser } from "./interfaces";
import  { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./util";


export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({children} : IAuthProvider) =>{
    const [user, setUser] = useState<IUser | null>();
    const navigate = useNavigate();
    
    useEffect(()=>{
        const User = getUserLocalStorage();
        if(User){
            setUser(User);
        }
    },[]);

    async function VerifyLoggin() {

        const User = getUserLocalStorage();
        try {
            await http.post('admin/free',{
                token: User?.token
            });
            return console.log('autorizado');
            
        } catch (error) {
            alert('você não tem acesso');
            navigate('/login')
        }
        
    }
    async function authenticate(email: string, password: string) {
        const response = await LoginRequest(email, password);
        const payload = {token: response, email};
        setUser(payload);
        setUserLocalStorage(payload);
    }
    function logout(){
        setUser(null);
        setUserLocalStorage(null);
    }
    return <AuthContext.Provider value={{...user, authenticate, logout, VerifyLoggin}}>{children}</AuthContext.Provider>
}