import { Routes , Route } from "react-router-dom";
import { AuthProvider } from "../auth/Auth";
import { ModalProvider } from "../context/modal.context";
import Cadastro from "./cadastro/cadastro";
import Home from "./home/home";
import Login from "./login/login";




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
                <Route path="/" element={<HomeModal/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cadastrar" element={<Cadastro/>}/>
            </Routes>
        </AuthProvider>
    )
}