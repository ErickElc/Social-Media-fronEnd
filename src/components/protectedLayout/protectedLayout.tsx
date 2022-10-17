import { useNavigate, useParams } from "react-router-dom";
import { getUserLocalStorage } from "../../auth/util";
import {useState , useEffect} from 'react';
import http from "../../api/api";
interface IProtected{
    children: JSX.Element;
}
export function ProtectedLayoutNoLogged({children} : IProtected) {
    const User = getUserLocalStorage();
    const navigate = useNavigate();
    const [response, setResponse] = useState<Number | null>(null);
    useEffect(()=>{
        http.post('auth/free',{
            token: User?.token,
        }).then(res => setResponse(res.status)).catch((err) => {
            setResponse(err.response.status)
        })
    },[User, navigate]);
    if(!User?.token) {
        navigate('/login');
    }
    const VerifyLoggin = (status: Number | null) => {
        if(status === 202){
            return children;
        }else{
            return <h1 className='font-bold text-2xl mt-10'>ERROR: 404 Essa página não existe</h1>
        }  
    } 
    return VerifyLoggin(response);
}
export function ProtectedLayoutLogged({children} : {children: JSX.Element}){
    const User = getUserLocalStorage();
    const navigate = useNavigate();
    const [response, setResponse] = useState<Number | null>(null);
    if(User?.token) return navigate('/login')
    useEffect(()=>{
        http.post('auth/free',{
            token: User?.token,
        }).then(res => setResponse(res.status)).catch((err) => {
            setResponse(err.response.status)
        })
    },[User, navigate])
    const VerifyLoggin = (status: Number | null) => {
        if(status === 200){
            
            return <h1>Você não tem acesso</h1>
        }else{
            return children;
        }
    }
    return VerifyLoggin(response);
}
export function ProtectedLayoutAdmin({children}: {children:JSX.Element}){
    const User = getUserLocalStorage();
    const navigate = useNavigate();
    const [response, setResponse] = useState<Number | null>(null);
    useEffect(()=>{
        http.post('auth/admin',{
            token: User?.token,
            email: User?.email
        }).then(res => setResponse(res.status)).catch((err) => {
            setResponse(err.response.status)
        })
    },[User, navigate])
    const VerifyLoggin = (status: Number | null) => {
        if(status === 200){
            return children;
        }else{
            return <h1 className='font-bold text-2xl mt-10'>ERROR: 404 Essa página não existee</h1>;
        }
    }
    return VerifyLoggin(response);
}
export function ProtectedLayoutPrivatePageUser({children} : {children: JSX.Element}){
    const {id} = useParams();
    const User = getUserLocalStorage();
    const [response , setResponse] = useState<Number | null>(null);
    useEffect(()=>{
        http.post(`auth/private/free/${id}`,{
            token: User?.token,
            email: User?.email
        }).then(res => setResponse(res.status)).catch((err) => {
            setResponse(err.response.status)
        })
    },[User,id])
    const VerifyLoggin = (status: Number | null) => {
        if(status === 202){
            return children;
        }else{
            return <h1 className='font-bold text-2xl mt-10'>ERROR: 404 Essa página não existe</h1>;
        }
    }
    return VerifyLoggin(response);

}