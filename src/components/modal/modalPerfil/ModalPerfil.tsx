import { useAuth } from "../../../auth/useAuth";
import { ModalHeader} from "../../../styles/components";
import { useModalHeaderContext } from "../../../context/modalHeader.context";
import { IPerfil } from "../../../interface/Interface";

export default function ModalPerfil(props : any ){
    const auth = useAuth();
    
    const modalContext = useModalHeaderContext();
    const rotaPerfil = `/perfil/${props.data?.id_}`;
    function Logout(){
        auth.logout();
    }
    return(
        <ModalHeader style={(modalContext.modalState.open === true) ? {visibility: 'visible'} : {visibility: 'hidden'}}>
            <a href={rotaPerfil}>Perfil</a>
            <p onClick={Logout}><a className='blue underline' href='/login'>Logout</a></p>
        </ModalHeader>
    )
}