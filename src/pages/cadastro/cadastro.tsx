import { DivBody, DivBord, TextLogin, TextoLink} from "../../styles/components";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../../styles/Styles.scss'
import React, { useState } from "react";
import http from "../../api/api";
import { Link, useNavigate } from "react-router-dom";



export default function Cadastro(){

    const navigate = useNavigate();
    const [formInputs, setFormInputs] = useState({
        name: '',
        age: '',
        email: '',
        password: ''
    })
    
    const [request, setRequest] = useState("");

    function registerWorked(register : any){
        if((register.request.status) === 201){
            alert("Usuário criado com sucesso!");
            navigate("/login");
            return console.log("created");
        };
    }; 

    async function SubmitForm(e: React.FormEvent<HTMLFormElement>){

        e.preventDefault();

        console.log("Cadastrando Usuário!");
        
        try{
            const registerRequest = await http.post("api/cadastrar",{
                name: formInputs.name,
                age: formInputs.age,
                email: formInputs.email,
                password: formInputs.password
            })
            registerWorked(registerRequest);
        }
        catch(err){
            console.log(err);
            setRequest("Esse e-mail já foi cadastrado!");
        }
        
    };

    return(
        <div className="div-bg">
            <DivBody className="DivBody">
                <DivBord className="ContainerBord" onSubmit={SubmitForm}>
                    <TextLogin className="Title">
                        Cadastro
                    </TextLogin>
                    <TextLogin className="requestTest">
                        {request}
                    </TextLogin>
                    <TextField 
                        className="Inputs"
                        id="outlined-basic"
                        value={formInputs.name}
                        label="Nome" 
                        variant="outlined"
                        required
                        type='text'
                        onChange={e => setFormInputs( prev => ({...prev, name: e.target.value}))}
                    />
                    <TextField 
                        className="Inputs"
                        id="outlined-basic"
                        value={formInputs.age}
                        label="Idade" 
                        variant="outlined"
                        required
                        type='number'
                        onChange={e => setFormInputs( prev => ({...prev, age: e.target.value}))}
                    />
                    <TextField 
                        className="Inputs"
                        id="outlined-basic"
                        required
                        value={formInputs.email}
                        label="Email" 
                        variant="outlined"
                        type='email'
                        onChange={e => setFormInputs( prev => ({...prev, email: e.target.value}))}
                    />
                    <TextField 
                        className="Inputs"
                        id="outlined-basic"
                        value={formInputs.password}
                        label="Senha" 
                        variant="outlined"
                        required
                        type="password"
                        onChange={e => setFormInputs( prev => ({...prev, password: e.target.value}))}
                    />
                    <Button variant="contained" className="buttonLogin" type="submit">Cadastrar</Button>
                    <TextoLink className="textLink">
                        <Link to='/login'>
                            Já tem conta?
                        </Link>    
                    </TextoLink>
                </DivBord>
            </DivBody>
        </div>
    )
}