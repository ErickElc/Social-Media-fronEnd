import { Routes , Route } from "react-router-dom";
import { AuthProvider } from "../auth/Auth";
import Header from "../components/header";
import PaginaPadrao from "../components/paginaPadrao/paginaPadrao";
import { ModalProvider } from "../context/modal.context";
import { ModalHeaderProvider } from "../context/modalHeader.context";
import Cadastro from "./cadastro/cadastro";
import RecoverPassWord from "./esqueceuSenha/recover";
import Home from "./home/home";
import Login from "./login/login";
import Perfil from "./perfil/perfil";
export default function App(){
    return(
        <ModalHeaderProvider>
            <ModalProvider>
                <AuthProvider>
                    <Routes>
                        <Route path='/' element={<PaginaPadrao/>}>
                            <Route path='/' element={<Home/>}/>
                            <Route path="/perfil/:id" element={<Perfil/>}/>
                            <Route path='*' element={<h1>ERROR: 404 Essa página não existe</h1>}/>
                        </Route>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/cadastrar" element={<Cadastro/>}/>
                        <Route path="/recover" element={<RecoverPassWord/>}/>                
                    </Routes>
                </AuthProvider>
            </ModalProvider>
        </ModalHeaderProvider>
    )
}