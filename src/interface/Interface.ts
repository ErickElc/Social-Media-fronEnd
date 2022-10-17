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
    _id: string,
    image_url: string
}
export interface IPost2 extends IAutor{
    content: string,
    createdDate: string
    _v: number, 
    _id: string
    Ipost2: () => IPost[] | null
}
export interface IPerfil{
    _id: string,
    name: string,
    age: number
    email: string,
    createdDate: string ,
    status: Number
}
export interface IData{
    _id: string,
    name: string,
    age: number,
    email: string,
    createdDate: string,
}