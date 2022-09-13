import { createContext } from "react";
import { IAuthProvider } from "../auth/interfaces";
import { useState, useContext} from 'react'
import { IContextModal, IModalState } from "../interface/Interface";
export const ModalHeaderContext =  createContext<IContextModal>({} as IContextModal);


export const ModalHeaderProvider = ({children} : IAuthProvider) =>{

    const [modalState, setModalState] = useState<IModalState>({open: false});

    const openModal = () => setModalState({open: !modalState.open});

    return<ModalHeaderContext.Provider value={{modalState, openModal}}>{children}</ModalHeaderContext.Provider>;
}

export const useModalHeaderContext = () =>{
    const context = useContext(ModalHeaderContext);
    return context;

}