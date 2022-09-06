import { DivBody, DivBord, TextLogin, TextoLink} from "../../styles/components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useAuth } from "../../auth/useAuth";
import './login.scss';

export default function Login(){
    const navigate = useNavigate();
<<<<<<< HEAD
    const auth = useAuth();
=======
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })
>>>>>>> 9fe1009cba7d02385b093a294f68f62ff01931d2
    const [request, setRequest] = useState("");
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    async function SubmitForm(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try {
<<<<<<< HEAD
            await auth.authenticate(inputs.email, inputs.password);
            navigate('/');

=======
            const loginRequest = await http.post("/api/login", {
                email: inputs.email,
                password: inputs.password
            });
            isLogged(loginRequest);
            
>>>>>>> 9fe1009cba7d02385b093a294f68f62ff01931d2
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
                        value={inputs.email}
                        required
                        type='email'
<<<<<<< HEAD
                        onChange={(e) => setInputs(prev => ({...prev, email: e.target.value}))}
=======
                        onChange={(e) => setInputs(prev => ({...prev, email: e.target.value }))}
>>>>>>> 9fe1009cba7d02385b093a294f68f62ff01931d2
                    />
                    <TextField 
                        className="Inputs"
                        id="outlined-basic"
                        label="Senha"   
                        value={inputs.password}
                        variant="outlined"
                        required
                        type="password"
<<<<<<< HEAD
                        onChange={(e) => setInputs(prev => ({...prev, password: e.target.value}))}
=======
                        onChange={(e) => setInputs(prev => ({...prev, password: e.target.value }))}
>>>>>>> 9fe1009cba7d02385b093a294f68f62ff01931d2
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