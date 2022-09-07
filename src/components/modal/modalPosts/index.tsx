import { FormComponent, StyleForm } from '../../../styles/components';
import { useModalContext } from '../../../context/modal.context';
import { useAuth } from '../../../auth/useAuth';
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import http from '../../../api/api';
import {useState} from 'react'
import './style.scss';
export default function ModalPost(props: any){
    const modalContext = useModalContext();
    const [inputs, setInputs] = useState({
        content: ''
    });
    const context = useAuth();

    async function SubmitForm(e: any){
        e.preventDefault();

        try {
            await http.post('api/posts/new',{
                content: inputs.content,
                autor:  props.props.id_,
                token: context.token
            })
            alert('Post criado com sucesso!');
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
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
                    onChange={(e) => setInputs(prev => ({...prev, content: e.target.value}))}
                />
                <Button variant="contained" className="ButtonLogin" type="submit">Enviar Post</Button>
            </FormComponent>
         </Box>
        </Modal>
    );

}