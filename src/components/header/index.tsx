import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';


import "./header.scss";


export default function Header(){

    return(
        
        <div className="containerHeader">
            <div className="">
                <h2>WorkMedia</h2>
            </div>
            <div className="">
                <TextField
                    id="input-with-icon-textfield"
                    label="TextField"
                    InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <Avatar src="/broken-image.jpg"/>
                    </InputAdornment>
                    ),
                    }}
                    variant="standard"
                />
            </div>
            <div>
                <Avatar src="/broken-image.jpg"/>
            </div>
        </div>
    )

};