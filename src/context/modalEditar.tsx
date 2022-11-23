import { createContext } from "react";
import { IAuthProvider } from "../auth/interfaces";
import { useState, useContext} from 'react'
import { IContextModal2 ,IModalState,IModalState2 } from "../interface/Interface";
export const ModalContextEditar =  createContext<IContextModal2>({} as IContextModal2);


export const ModalProviderEditar = ({children} : IAuthProvider) =>{

    const [modalState, setModalState] = useState<IModalState>({open: false});
    const [id, setId] = useState('');

    const openModal = () => setModalState({open: !modalState.open});

    return<ModalContextEditar.Provider value={{modalState, openModal, id, setId}}>{children}</ModalContextEditar.Provider>;
}

export const useModalContextEditar = () =>{
    const context = useContext(ModalContextEditar);
    return context;

}