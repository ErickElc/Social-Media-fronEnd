
import { createContext } from "react";
import { IAuthProvider } from "../auth/interfaces";
import { useState, useContext} from 'react'
import { IContextModal, IModalState } from "../interface/Interface";
export const ModalContext =  createContext<IContextModal>({} as IContextModal);


export const ModalProvider = ({children} : IAuthProvider) =>{

    const [modalState, setModalState] = useState<IModalState>({open: false});

    const openModal = () => setModalState({open: !modalState.open});

    return<ModalContext.Provider value={{modalState, openModal}}>{children}</ModalContext.Provider>;
}

export const useModalContext = () =>{
    const context = useContext(ModalContext);
    return context;

}