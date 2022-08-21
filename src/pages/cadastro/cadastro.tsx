import { DivBody, DivBord, TextLogin, TextoLink} from "../../styles/components";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../../styles/Styles.scss'
import React, { useState } from "react";
import http from "../../api/api";



export default function Cadastro(){
    const [name, setName] = useState('');

    const [age, setAge] = useState('');
    
    const [email, setEmail] = useState('');
    
    const [password, setPassword] = useState('');



    async function SubmitForm(e: React.FormEvent<HTMLFormElement>){

        e.preventDefault();

        console.log("Cadastrando Usuário!");
        
        try{
            await http.post("api/users/cadastrar",{
                name: name,
                age: age,
                email: email,
                password: password
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        }
        catch(err){
            console.log(err)
        }
        
    }

    return(
        <DivBody className="DivBody">
            <DivBord className="ContainerBord" onSubmit={SubmitForm}>
                <TextLogin className="Title">
                    Cadastro
                </TextLogin>
                <TextField 
                    className="Inputs"
                    id="outlined-basic"
                    value={name}
                    label="Nome" 
                    variant="outlined"
                    required
                    type='text'
                    onChange={e => setName(e.target.value)}
                />
                <TextField 
                    className="Inputs"
                    id="outlined-basic"
                    value={age}
                    label="Idade" 
                    variant="outlined"
                    required
                    type='number'
                    onChange={e => setAge(e.target.value)}
                />
                <TextField 
                    className="Inputs"
                    id="outlined-basic"
                    required
                    value={email}
                    label="Email" 
                    variant="outlined"
                    type='email'
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField 
                    className="Inputs"
                    id="outlined-basic"
                    value={password}
                    label="Senha" 
                    variant="outlined"
                    required
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" className="buttonLogin" type="submit">Cadastrar</Button>
                <TextoLink className="textLink">
                    Já tem conta?
                </TextoLink>
            </DivBord>
        </DivBody>
    )
}