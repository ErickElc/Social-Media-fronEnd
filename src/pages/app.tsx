import { Routes , Route } from "react-router-dom";
import Cadastro from "./cadastro/cadastro";
import Home from "./home/home";
import Login from "./login/login";




export default function App(){

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cadastrar" element={<Cadastro/>}/>
        </Routes>
    )
}