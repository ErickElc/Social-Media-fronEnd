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
        const request = await http.post('api/users/login',{email, password});
        const dataRequest = await http.post('api/users/list/email',{email: email, token: request.data});
        return {request: request, dataRequest: dataRequest.data};
    } catch (error) {
       return null 
    }
}