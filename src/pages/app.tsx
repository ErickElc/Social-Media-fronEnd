import { Routes , Route } from "react-router-dom";
import { AuthProvider } from "../auth/Auth";
import Header from "../components/header";
import PaginaPadrao from "../components/paginaPadrao/paginaPadrao";
import { DataProvider } from "../context/dataContext";
import { ModalProvider } from "../context/modal.context";
import { ModalProviderEditar } from "../context/modalEditar";
import { ModalHeaderProvider } from "../context/modalHeader.context";
import Cadastro from "./cadastro/cadastro";
import ConfigPage from "./configs/config";
import RecoverPassWord from "./esqueceuSenha/recover";
import Home from "./home/home";
import Login from "./login/login";
import Perfil from "./perfil/perfil";
import Pesquisa from "./pesquisa/pesquisa";
export default function App(){
    return(
        <ModalHeaderProvider>
            <ModalProvider>
                <ModalProviderEditar>
                    <AuthProvider>
                        <DataProvider>
                            <Routes>
                                <Route path='/' element={<PaginaPadrao/>}>
                                    <Route path='/' element={<Home/>}/>
                                    <Route path="/perfil/:id" element={<Perfil/>}/>
                                    <Route path='/conta/:id' element={<ConfigPage/>}/>
                                    <Route path='/pesquisa/:id' element={<Pesquisa/>}/>
                                    <Route path='*' element={<h1>ERROR: 404 Essa página não existe</h1>}/>
                                </Route>
                                <Route path="/login" element={<Login/>}/>
                                <Route path="/cadastrar" element={<Cadastro/>}/>
                                <Route path="/recover" element={<RecoverPassWord/>}/>                
                            </Routes>
                        </DataProvider>
                    </AuthProvider>
                </ModalProviderEditar>
            </ModalProvider>
        </ModalHeaderProvider>
    )
}