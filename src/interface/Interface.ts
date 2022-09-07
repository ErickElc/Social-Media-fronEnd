export interface IModalState {
    open?: boolean
}
export interface IContextModal extends IModalState{
    openModal: () => void;
    modalState: IModalState;
}
export interface IAutor{
    autor: {
        _id: string,
        name: string,
        age: number
        email: string,
        createdDate: string
    }
}
export interface IPost extends IAutor{
   content: string,
   createdDate: string
    _v: number, 
    _id: string
}