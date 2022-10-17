import { useAuth } from "../../../auth/useAuth";
import { ModalHeader} from "../../../styles/components";
import { getUserLocalStorage } from "../../../auth/util";
import { useModalHeaderContext } from "../../../context/modalHeader.context";
import { Link } from "react-router-dom";

export default function ModalPerfil(){
    const modalContext = useModalHeaderContext();
    const user = getUserLocalStorage();
    const auth = useAuth();
    const rotaPerfil = `/perfil/${user?._id}`;
    function Logout(){
        auth.logout();
    }
    return(
        <ModalHeader style={(modalContext.modalState.open === true) ? {display: 'flex'} : {display: 'none'}}>
            <p className="text-2xl font-bold text-end mr-8 cursor-pointer select-none" onClick={() => {modalContext.openModal()}}>X</p>
            <p className='text-xl mb-3 font-bold'><Link to={rotaPerfil}>Perfil</Link></p>
            <p onClick={Logout}><a className='text-xl font-bold' href='/login'>Logout</a></p>
        </ModalHeader>
    )
}