export interface IModalState {
    open?: boolean
}
export interface IContextModal extends IModalState{
    openModal: () => void;
    modalState: IModalState;
}