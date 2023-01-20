import { useState, useContext, createContext } from "react";

//Config
import { IContextModal, IModalState } from "../interface/Interface";
import { IAuthProvider } from "../auth/interfaces";

export const ModalContext = createContext<IContextModal>({} as IContextModal);

export const ModalProvider = ({ children }: IAuthProvider) => {
    const [modalState, setModalState] = useState<IModalState>({ open: false });

    const openModal = () => setModalState({ open: !modalState.open });

    return <ModalContext.Provider value={{ modalState, openModal }}>{children}</ModalContext.Provider>;
};

export const useModalContext = () => {
    const context = useContext(ModalContext);
    return context;
};
