import { DivBody, DivBord, TextLogin, TextoLink} from "../../styles/components";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../../styles/Styles.scss'
import './login.scss'

export default function Login(){
    function SubmitForm(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
    }

    return(
        <DivBody className="DivBody">
            <DivBord className="ContainerBord" onSubmit={SubmitForm}>
                <TextLogin className="Title">
                    Login
                </TextLogin>
                <TextField 
                    className="Inputs"
                    id="outlined-basic"
                    label="Email" 
                    variant="outlined"
                    type='email'
                />
                <TextField 
                    className="Inputs"
                    id="outlined-basic"
                    label="Senha" 
                    variant="outlined"
                    type="password"
                    onChange={(e) => e.target.value}
                />
                <Button variant="contained" className="buttonLogin">Login</Button>
                <TextoLink className="textLink">
                    Esqueceu a senha?
                </TextoLink>
                <TextoLink className="textLink">
                    Não tem cadastro?
                </TextoLink>
            </DivBord>
        </DivBody>
    )

}