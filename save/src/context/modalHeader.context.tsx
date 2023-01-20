import { useState, useContext, createContext } from "react";

import { IContextModal, IModalState } from "../interface/Interface";
import { IAuthProvider } from "../auth/interfaces";

export const ModalHeaderContext = createContext<IContextModal>({} as IContextModal);

export const ModalHeaderProvider = ({ children }: IAuthProvider) => {
    const [modalState, setModalState] = useState<IModalState>({ open: false });

    const openModal = () => setModalState({ open: !modalState.open });

    return <ModalHeaderContext.Provider value={{ modalState, openModal }}>{children}</ModalHeaderContext.Provider>;
};

export const useModalHeaderContext = () => {
    const context = useContext(ModalHeaderContext);
    return context;
};
