import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";

export function ProtectedLayout( { children } : {children: JSX.Element}){
    const auth = useAuth();
    const navigate = useNavigate();
   if(!auth.email){
       alert('Você não está logado!');
       navigate('/');
       return <h1>Don't have access</h1>;

   }
   return children;
}