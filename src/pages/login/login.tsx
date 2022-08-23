import { DivBody, DivBord, TextLogin, TextoLink} from "../../styles/components";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../../styles/Styles.scss';
import './login.scss';
import http from "../../api/api";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [request, setRequest] = useState("");

    async function isLogged(login :any){
        console.log(login.request.status);
        if(login.request.status === 202){
            alert("Login efetuado com sucesso");
            navigate("/");
        }
    };
    async function SubmitForm(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try {
            const loginRequest = await http.post("/api/login", {
                email: email,
                password: password
            });
            isLogged(loginRequest);
            
        } catch (error) {
            setRequest("email ou senha está incorreta!");
            console.log(error);
        }
    };

    return(
        <div className="div-bg">
            <DivBody className="DivBody">
                <DivBord className="ContainerBord" onSubmit={SubmitForm}>
                    <TextLogin className="Title">
                        Login
                    </TextLogin>
                    <TextLogin className="requestTest">
                        {request}
                    </TextLogin>
                    <TextField 
                        className="Inputs"
                        id="outlined-basic"
                        label="Email" 
                        variant="outlined"
                        required
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField 
                        className="Inputs"
                        id="outlined-basic"
                        label="Senha" 
                        variant="outlined"
                        required
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant="contained" className="buttonLogin" type="submit">Login</Button>
                    <TextoLink className="textLink">
                        <Link to='/esqueceuSenha'>
                            Esqueceu a senha?
                        </Link>  
                    </TextoLink>
                    <TextoLink className="textLink">
                        <Link to='/cadastrar'>
                            Não tem cadastro?
                        </Link>  
                    </TextoLink>
                </DivBord>
            </DivBody>
        </div>
    )

}