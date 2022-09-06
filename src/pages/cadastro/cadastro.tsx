import { DivBody, DivBord, TextLogin, TextoLink} from "../../styles/components";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import http from "../../api/api";



export default function Cadastro(){

    const navigate = useNavigate();
<<<<<<< HEAD

    const [inputs, setInputs] = useState({
=======
    const [formInputs, setFormInputs] = useState({
>>>>>>> 9fe1009cba7d02385b093a294f68f62ff01931d2
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
<<<<<<< HEAD
                name: inputs.name,
                age: inputs.age,
                email: inputs.email,
                password: inputs.password
=======
                name: formInputs.name,
                age: formInputs.age,
                email: formInputs.email,
                password: formInputs.password
>>>>>>> 9fe1009cba7d02385b093a294f68f62ff01931d2
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
<<<<<<< HEAD
                        value={inputs.name}
=======
                        value={formInputs.name}
>>>>>>> 9fe1009cba7d02385b093a294f68f62ff01931d2
                        label="Nome" 
                        variant="outlined"
                        required
                        type='text'
<<<<<<< HEAD
                        onChange={e => setInputs(prev => ({...prev, name: e.target.value}))}
=======
                        onChange={e => setFormInputs( prev => ({...prev, name: e.target.value}))}
>>>>>>> 9fe1009cba7d02385b093a294f68f62ff01931d2
                    />
                    <TextField 
                        className="Inputs"
                        id="outlined-basic"
<<<<<<< HEAD
                        value={inputs.age}
=======
                        value={formInputs.age}
>>>>>>> 9fe1009cba7d02385b093a294f68f62ff01931d2
                        label="Idade" 
                        variant="outlined"
                        required
                        type='number'
<<<<<<< HEAD
                        onChange={e => setInputs(prev => ({...prev, age: e.target.value}))}
=======
                        onChange={e => setFormInputs( prev => ({...prev, age: e.target.value}))}
>>>>>>> 9fe1009cba7d02385b093a294f68f62ff01931d2
                    />
                    <TextField 
                        className="Inputs"
                        id="outlined-basic"
                        required
<<<<<<< HEAD
                        value={inputs.email}
                        label="Email" 
                        variant="outlined"
                        type='email'
                        onChange={e => setInputs(prev => ({...prev, email: e.target.value}))}
=======
                        value={formInputs.email}
                        label="Email" 
                        variant="outlined"
                        type='email'
                        onChange={e => setFormInputs( prev => ({...prev, email: e.target.value}))}
>>>>>>> 9fe1009cba7d02385b093a294f68f62ff01931d2
                    />
                    <TextField 
                        className="Inputs"
                        id="outlined-basic"
<<<<<<< HEAD
                        value={inputs.password}
=======
                        value={formInputs.password}
>>>>>>> 9fe1009cba7d02385b093a294f68f62ff01931d2
                        label="Senha" 
                        variant="outlined"
                        required
                        type="password"
<<<<<<< HEAD
                        onChange={(e) => setInputs(prev => ({...prev, password: e.target.value}))}
=======
                        onChange={e => setFormInputs( prev => ({...prev, password: e.target.value}))}
>>>>>>> 9fe1009cba7d02385b093a294f68f62ff01931d2
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