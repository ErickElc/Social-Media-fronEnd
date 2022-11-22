import { DivBody, DivBord, TextLogin, TextoLink} from "../../styles/components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useAuth } from "../../auth/useAuth";
import './login.scss';
import WorkMediaLogo from '../../styles/WorkMediaLogo.png';
export default function Login(){
    const navigate = useNavigate();
    const auth = useAuth();
    const [request, setRequest] = useState("");
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    async function SubmitForm(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try {
            const loginRequest = await auth.authenticate(inputs.email, inputs.password);
            if(loginRequest === 202){
                navigate('/');
                return window.location.reload();
            }
            else return setRequest("email ou senha está incorreta!");

        } catch (error) {
            setRequest("email ou senha está incorreta!");
            console.log(error);
        }
    };

    return( 
        <div className="div-bg">
            <DivBody className="DivBody">
                <DivBord className="ContainerBord" onSubmit={SubmitForm}>
                    <img src={WorkMediaLogo}  alt="Work Media Logo" style={{width: 200, height: 120}}/>
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
                        onChange={(e) => setInputs(prev => ({...prev, email: e.target.value}))}
                    />
                    <TextField 
                        className="Inputs"
                        id="outlined-basic"
                        label="Senha"   
                        value={inputs.password}
                        variant="outlined"
                        required
                        type="password"
                        onChange={(e) => setInputs(prev => ({...prev, password: e.target.value}))}
                    />
                    <Button variant="contained" className="buttonLogin" type="submit">Login</Button>
                    <TextoLink className="textLink">
                        <Link to='/recover'>
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
    );

}