import "./header.scss";
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import { SearchOutlined } from '@mui/icons-material';
import { getUserLocalStorage } from "../../auth/util";
import InputAdornment from '@mui/material/InputAdornment';
import { HeaderComponent, HeaderPerfil } from '../../styles/components';
import { useModalHeaderContext } from "../../context/modalHeader.context";
import { Link } from "react-router-dom";
import { useDataContext } from "../../context/dataContext";

export default function Header(){
    const DataContext = useDataContext();
    const modalContext = useModalHeaderContext();
    function ToggleMode(){
        modalContext.openModal();
        
    };
    return(
        <HeaderComponent>
            <div className="mb-2">
                <h2 className='text-2xl font-bold mx-0'>
                    <Link to='/'>
                        WorkMedia
                    </Link>
                </h2>
            </div>
            <div className="mb-2">
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
            <HeaderPerfil className='flex items-center mx-3 mb-2' onClick={ToggleMode}>
                <Avatar src={DataContext.userData?.avatar} alt='broken-image.jpg' className='mr-3' style={{minHeight: 'auto',minWidth:'auto'}}/>
                <p>{DataContext.userData?.name}</p>
            </HeaderPerfil>
        </HeaderComponent>
    )

};