import { HeaderComponent, HeaderPerfil, TextColor } from '../../styles/components';
import { useModalHeaderContext } from "../../context/modalHeader.context";
import { useDataContext } from "../../context/dataContext";
import TextField from '@mui/material/TextField';
import { Autocomplete } from "@mui/material";
import { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import { Link, useNavigate } from "react-router-dom";
import http from "../../api/api";
import "./header.scss";
import { idText } from 'typescript';
interface ILabel{
    label: string,
    id: string
}
export default function Header(){
    const [users, setUsers] = useState<any>([]);
    const [input, setInputs] = useState('')
    const navigate = useNavigate()
    const DataContext = useDataContext();
    const modalContext = useModalHeaderContext();
    function ToggleMode(){
        modalContext.openModal();
    }
    const perfis = () =>{ 
        let label: Array<ILabel | []> = [];
        for(let i in users){
            label.push({label: users[i]?.name, id: users[i]?._id})
        }
        return label;
    }
    const BuscarUser = (userID :any) =>{
        navigate(`/perfil/${userID}`)
        window.location.reload();
    }
    useEffect(()=>{
        http.get('api/users/all')
        .then(res => {
            setUsers(res.data)
        })
        .catch(err => console.log(err))
    },[])
    return(
        <HeaderComponent>
            <div className="mb-2">
                <TextColor>
                    <Link to='/'>
                         WorkMedia
                    </Link>
                </TextColor>
            </div>
            <div className="mb-2">
            <Autocomplete
                onChange={(e: any, option: any) => {
                    BuscarUser(option.id)
                }}
                disablePortal
                id="combo-box-demo"
                options={perfis()}
                sx={{ width: 250 }}
                fullWidth
                renderInput={(params) => 
                        <TextField 
                            {...params} 
                            label="Pesquise por perfis" 
                            onChange={(e: any) => setInputs((e.target.value))}
                            value={input}
                        />
                }
            />
            </div>
            <HeaderPerfil className='flex items-center mx-3 mb-2' onClick={ToggleMode}>
                <Avatar src={DataContext.userData?.avatar} alt='broken-image.jpg' className='mr-3' style={{minHeight: 'auto',minWidth:'auto'}}/>
                <p>{DataContext.userData?.name}</p>
            </HeaderPerfil>
        </HeaderComponent>
    )

};