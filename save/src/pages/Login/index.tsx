import { useState } from "react";

//Config
import { useAuth } from "../../auth/useAuth";
import * as S from "./styles";
import "./styles.scss";

// Libs
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// Images
import WorkMediaLogo from "../../styles/WorkMediaLogo.png";

export default () => {
    const navigate = useNavigate();
    const auth = useAuth();

    const [request, setRequest] = useState("");

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const SubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const loginRequest = await auth.authenticate(inputs.email, inputs.password);
            if (loginRequest === 202) {
                navigate("/");
                return window.location.reload();
            } else return setRequest("email ou senha está incorreta!");
        } catch (error) {
            setRequest("email ou senha está incorreta!");
            console.log(error);
        }
    };

    return (
        <div className="div-bg">
            <S.DivBody className="DivBody">
                <S.DivBord className="ContainerBord" onSubmit={SubmitForm}>
                    <img src={WorkMediaLogo} alt="Work Media Logo" style={{ width: 200, height: 120 }} />
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
                        label="Senha"
                        value={inputs.password}
                        variant="outlined"
                        required
                        type="password"
                        onChange={(e) => setInputs((prev) => ({ ...prev, password: e.target.value }))}
                    />
                    <Button variant="contained" className="buttonLogin" type="submit">
                        Login
                    </Button>
                    <S.TextoLink className="textLink">
                        <Link to="/recover">Esqueceu a senha?</Link>
                    </S.TextoLink>
                    <S.TextoLink className="textLink">
                        <Link to="/cadastrar">Não tem cadastro?</Link>
                    </S.TextoLink>
                </S.DivBord>
            </S.DivBody>
        </div>
    );
};
