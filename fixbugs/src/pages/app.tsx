import { Routes, Route } from "react-router-dom";

//Config
import { ModalHeaderProvider } from "../context/modalHeader.context";
import { ModalProviderEditar } from "../context/modalEditar";
import { ModalProvider } from "../context/modal.context";
import { DataProvider } from "../context/dataContext";
import { AuthProvider } from "../auth/Auth";

// Components
import PaginaPadrao from "../components/PaginaPadrao";

// Pages
import RecoverPassWord from "./EsqueceuSenha";
import ConfigPage from "./ConfigPage";
import Pesquisa from "./Pesquisar";
import Cadastro from "./Cadastro";
import Perfil from "./Perfil";
import Login from "./Login";
import Home from "./Home";

export default () => {
    return (
        <ModalHeaderProvider>
            <ModalProvider>
                <ModalProviderEditar>
                    <AuthProvider>
                        <DataProvider>
                            <Routes>
                                <Route path="/" element={<PaginaPadrao />}>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/perfil/:id" element={<Perfil />} />
                                    <Route path="/conta/:id" element={<ConfigPage />} />
                                    <Route path="/pesquisa/:id" element={<Pesquisa />} />
                                    <Route path="*" element={<h1>ERROR: 404 Essa página não existe</h1>} />
                                </Route>
                                <Route path="/login" element={<Login />} />
                                <Route path="/cadastrar" element={<Cadastro />} />
                                <Route path="/recover" element={<RecoverPassWord />} />
                            </Routes>
                        </DataProvider>
                    </AuthProvider>
                </ModalProviderEditar>
            </ModalProvider>
        </ModalHeaderProvider>
    );
};
