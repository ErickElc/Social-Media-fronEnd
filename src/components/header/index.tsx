import "./header.scss";
import http from "../../api/api";
import Avatar from '@mui/material/Avatar';
import { useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import { IPerfil } from "../../interface/Interface";
import { SearchOutlined } from '@mui/icons-material';
import { getUserLocalStorage } from "../../auth/util";
import InputAdornment from '@mui/material/InputAdornment';
import { HeaderComponent, HeaderPerfil } from '../../styles/components';
import { useModalHeaderContext } from "../../context/modalHeader.context";

export default function Header(){

    const user = getUserLocalStorage();
    const [data, setData] = useState<IPerfil>();
    const modalContext = useModalHeaderContext();

    function ToggleMode(){
        modalContext.openModal();
        
    };

    useEffect(()=>{
        GetDataOfUser();
    },[]);
    async function GetDataOfUser(){
        try {
            const Data = await http.get(`/api/users/user/${user.email}`);
            if(Data){
                return setData(Data.data);
            }
            return console.log('error');
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <HeaderComponent>
            <div className="">
                <h2 className='text-2xl font-bold mx-0'>
                    WorkMedia
                </h2>
            </div>
            <div>
                <TextField 
                    id="outlined" 
                    className="bg-white rounded-lg"
                    label="Pesquise por perfis" 
                    variant="outlined" 
                    InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <SearchOutlined/>
                          </InputAdornment>
                         )
                        }}
                />
            </div>
            <HeaderPerfil className='flex items-center mx-3 ' onClick={ToggleMode}>
                <Avatar src="/broken-image.jpg" className='mr-3'/>
                <p>{data?.name}</p>
            </HeaderPerfil>
        </HeaderComponent>
    )

};