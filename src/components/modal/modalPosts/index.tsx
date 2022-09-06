import { useModalContext } from '../../../context/modal.context';
import { FormComponent, StyleForm } from '../../../styles/components';
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import {useState} from 'react'
import Modal from '@mui/material/Modal';
import './style.scss';
export default function ModalPost(){
    const modalContext = useModalContext();
    const [inputs, setInputs] = useState({
        container: ''
    });
    function SubmitForm(e: any){
        e.preventDefault();
    }
    function ToggleMode(){
        modalContext.openModal();
    }

    return(
        <Modal
            open={(modalContext.modalState.open === true) ? true : false}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >  
         <Box sx={StyleForm}>
            <div>
                <button onClick={ToggleMode} className="Button-back" >X</button>
            </div>
            <FormComponent method='post' onSubmit={SubmitForm} className='mx-10'>
                <TextField 
                    className="inputPost"
                    id="outlined-basic"
                    label="Escreva algo sobre a publicação" 
                    variant="outlined"
                    required
                    type='text'
                    onChange={(e) => setInputs(prev => ({...prev, container: e.target.value}))}
                />
                <Button variant="contained" className="ButtonLogin" type="submit">Enviar Post</Button>
            </FormComponent>
         </Box>
        </Modal>
    );

}