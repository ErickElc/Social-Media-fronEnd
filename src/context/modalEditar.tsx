import { useState, useContext, createContext } from "react";

// Configs
import { IContextModal2, IModalState } from "../interface/Interface";
import { IAuthProvider } from "../auth/interfaces";

export const ModalContextEditar = createContext<IContextModal2>({} as IContextModal2);

export const ModalProviderEditar = ({ children }: IAuthProvider) => {
    const [modalState, setModalState] = useState<IModalState>({ open: false });
    const [id, setId] = useState("");

    const openModal = () => setModalState({ open: !modalState.open });

    return (
        <ModalContextEditar.Provider value={{ modalState, openModal, id, setId }}>
            {children}
        </ModalContextEditar.Provider>
    );
};

export const useModalContextEditar = () => {
    const context = useContext(ModalContextEditar);
    return context;
};
