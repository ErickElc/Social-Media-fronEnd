import { HeaderComponent, HeaderPerfil, TextColor } from '../../styles/components';
import { useModalHeaderContext } from "../../context/modalHeader.context";
import { IData, IPerfis } from "../../interface/Interface";
import { useDataContext } from "../../context/dataContext";
import InputAdornment from '@mui/material/InputAdornment';
import { SearchOutlined } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import { Autocomplete } from "@mui/material";
import { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import http from "../../api/api";
import "./header.scss";

interface ILabel{
    label: string
}

export default function Header(){
    const [users, setUsers] = useState<any>([]);
    const DataContext = useDataContext();
    const modalContext = useModalHeaderContext();
    function ToggleMode(){
        modalContext.openModal();
    };
    const perfis = () =>{ 
        let label: Array<ILabel | []> = [];
        for(let i in users){
            label.push({label: users[i]?.name})
        }
        return label;
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
                disablePortal
                id="combo-box-demo"
                options={perfis()}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Pesquise por perfis" />}
            />
            </div>
            <HeaderPerfil className='flex items-center mx-3 mb-2' onClick={ToggleMode}>
                <Avatar src={DataContext.userData?.avatar} alt='broken-image.jpg' className='mr-3' style={{minHeight: 'auto',minWidth:'auto'}}/>
                <p>{DataContext.userData?.name}</p>
            </HeaderPerfil>
        </HeaderComponent>
    )

};