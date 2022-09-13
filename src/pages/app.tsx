import { Routes , Route } from "react-router-dom";
import { AuthProvider } from "../auth/Auth";
import Header from "../components/header";
import { ModalProvider } from "../context/modal.context";
import Cadastro from "./cadastro/cadastro";
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
                <Route path='/' element={<>
                    <HomeModal/>
                </>}/>
                <Route path="/perfil/:id" element={
                <>
                    <Perfil/>
                </>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cadastrar" element={<Cadastro/>}/>
                <Route path='*' element={<h1>Essa página não existe</h1>}/>
            </Routes>
        </AuthProvider>
    )
}