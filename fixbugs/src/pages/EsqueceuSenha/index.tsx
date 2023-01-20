import { useState } from "react";

//Config
import http from "../../api/api";
import * as S from "./styles";

// Libs
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";

// Images
import WorkMediaLogo from "../../styles/WorkMediaLogo.png";

export default () => {
    const navigate = useNavigate();

    const [request, setRequest] = useState("");
    const [inputs, setInputs] = useState({
        email: "",
        cpf: "",
        password: ""
    });

    const SubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const recoverRequest = await http.put("api/users/recover/password", inputs);
            if (recoverRequest) {
                alert("senha alterada com sucesso!");
                navigate("/login");
            }
        } catch (error) {
            setRequest("não foi possivel enviar o recuperar senha");
        }
    };

    return (
        <div className="div-bg">
            <S.DivBody className="DivBody">
                <S.DivBord className="ContainerBord" onSubmit={SubmitForm}>
                    <img src={WorkMediaLogo} alt="Work Media Logo" style={{ width: 200, height: 120 }} />
                    <h2 className="text-2xl font-bold">Recuperar Senha</h2>
                    <S.TextLogin className="requestTest">{request}</S.TextLogin>
                    <TextField
                        className="Inputs"
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        value={inputs.email}
                        required
                        type="email"
                        onChange={(e) => setInputs((prev) => ({ ...prev, email: e.target.value }))}
                    />
                    <TextField
                        className="Inputs"
                        id="outlined-basic"
                        label="Digite seu cpf (Apenas Números)"
                        variant="outlined"
                        inputProps={{ minLength: 11, maxLength: 11 }}
                        value={inputs.cpf}
                        required
                        type="text"
                        onChange={(e) => setInputs((prev) => ({ ...prev, cpf: e.target.value }))}
                    />
                    <TextField
                        className="Inputs"
                        id="outlined-basic"
                        label="Digite a nova senha"
                        value={inputs.password}
                        variant="outlined"
                        required
                        type="password"
                        onChange={(e) => setInputs((prev) => ({ ...prev, password: e.target.value }))}
                    />
                    <Button variant="contained" className="buttonLogin" type="submit">
                        Recuperar
                    </Button>
                </S.DivBord>
            </S.DivBody>
        </div>
    );
};
