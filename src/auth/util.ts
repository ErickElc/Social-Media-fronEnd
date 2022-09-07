import http from "../api/api"
import { IUser } from "./interfaces";



export const setUserLocalStorage = (user: IUser | null) =>{
    localStorage.setItem('u', JSON.stringify(user));
}
export const getUserLocalStorage = () => {
    const json = localStorage.getItem('u')
    if(!json) return null;


    const user = JSON.parse(json);

    return user ?? null;
}
export async function LoginRequest(email: string, password: string){
    try {
        const request = await http.post('api/login',{email, password});
        return  request;
    } catch (error) {
       return null 
    }
}