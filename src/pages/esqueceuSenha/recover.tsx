import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import http from "../../api/api";
import { DivBody, DivBord, TextLogin, TextoLink } from "../../styles/components";

export default function RecoverPassWord(){
    const [inputs, setInputs] = useState({
        email: '',
        age: '',
        password: '',
    });
    const [request, setRequest] = useState("");
    const navigate = useNavigate();
    async function SubmitForm(e : any){
        e.preventDefault();
        try {
            const recoverRequest = await http.put('api/users/recover-password', inputs);
            if(recoverRequest){
                alert('senha alterada com sucesso!');
                navigate('/login');
            }
        } catch (error) {
            setRequest("não foi possivel enviar o recuperar senha");
        }
    }

    return(
        <div className="div-bg">
            <DivBody className="DivBody">
                <DivBord className="ContainerBord" onSubmit={SubmitForm}>
                    <TextLogin className="Title">
                       Recuperar Senha
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
                        onChange={(e) => setInputs(prev => ({...prev, email: e.target.value}))}
                    />
                    <TextField 
                        className="Inputs"
                        id="outlined-basic"
                        label="Digite sua idade"
                        variant="outlined"
                        value={inputs.age}
                        required
                        type='number'
                        onChange={(e) => setInputs(prev => ({...prev, age: e.target.value}))}
                    />
                    <TextField 
                        className="Inputs"
                        id="outlined-basic"
                        label="Digite a nova senha" 
                        value={inputs.password}
                        variant="outlined"
                        required
                        type="password"
                        onChange={(e) => setInputs(prev => ({...prev, password: e.target.value}))}
                    />
                    <Button variant="contained" className="buttonLogin" type="submit">Recuperar</Button>
                </DivBord>
            </DivBody>
        </div>
    )
}