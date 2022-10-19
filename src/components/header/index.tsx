import "./header.scss";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import { SearchOutlined } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import { useDataContext } from "../../context/dataContext";
import { HeaderComponent, HeaderPerfil, TextColor } from '../../styles/components';
import { useModalHeaderContext } from "../../context/modalHeader.context";

export default function Header(){
    const DataContext = useDataContext();
    const modalContext = useModalHeaderContext();
    function ToggleMode(){
        modalContext.openModal();
        
    };
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