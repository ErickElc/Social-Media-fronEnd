import { Routes , Route } from "react-router-dom";
import { AuthProvider } from "../auth/Auth";
import Header from "../components/header";
import { ModalProvider } from "../context/modal.context";
import Cadastro from "./cadastro/cadastro";
import RecoverPassWord from "./esqueceuSenha/recover";
import Home from "./home/home";
import Login from "./login/login";
import Perfil from "./perfil/perfil";




export default function App(){
    function HomeModal(){
        return(
            <ModalProvider>
                <Home/>
            </ModalProvider>

        )
    }
    return(
        <AuthProvider>
            <Routes>
                <Route path='/' element={<HomeModal/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cadastrar" element={<Cadastro/>}/>
                <Route path="/perfil/:id" element={<Perfil/>}/>
                <Route path="/recover" element={<RecoverPassWord/>}/>                
                <Route path='*' element={<h1>ERROR: 404 Essa página não existe</h1>}/>
            </Routes>
        </AuthProvider>
    )
}