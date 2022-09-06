import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import "./header.scss";
import { HeaderComponent } from '../../styles/components';
import { SearchOutlined } from '@mui/icons-material';
export default function Header(props: any){
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
            <div className='flex items-center mx-3'>
                <Avatar src="/broken-image.jpg" className='mr-3'/>
                <p>{props.data.name}</p>
            </div>
        </HeaderComponent>
    )

};