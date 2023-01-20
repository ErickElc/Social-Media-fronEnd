import { SetStateAction } from "react";

export interface IDataContext {
    userData?: IData;
    setUserData: React.Dispatch<SetStateAction<IData | undefined>>;
}
export interface IDataContext2 {
    dataContext: {
        userData?: IData | IPerfil | undefined;
        setUserData?: React.Dispatch<SetStateAction<IData | undefined>>;
    };
    ToggleMode?: () => void;
}
export interface IModalState {
    open?: boolean;
}
export interface IModalState2 {
    open?: boolean;
    id: string;
    setId: React.Dispatch<SetStateAction<string>>;
}
export interface IContextModal extends IModalState {
    openModal: () => void;
    modalState: IModalState;
}
export interface IContextModal2 extends IModalState2 {
    openModal: () => void;
    modalState: IModalState;
}
export interface IPost {
    content: string;
    createdDate: string;
    _v: number;
    _id: string;
    image_url: string;
    autor: IData;
}
export interface IComments {
    _id: string;
    content: string;
    autorId: IData;
    postId: IPost;
    createdDate: string;
}
export interface IPost2 {
    content: string;
    createdDate: string;
    autor: IData;
    _v: number;
    _id: string;
    Ipost2: () => IPost[] | null;
}
export interface IPerfil {
    _id: string;
    name: string;
    age: number;
    email: string;
    createdDate: string;
    avatar?: string;
    status: Number;
}
export interface IData {
    _id?: string;
    name?: string;
    age?: number;
    cpf?: string;
    email: string;
    habilitado?: boolean;
    avatar?: string;
    createdDate?: string;
}
export interface IPerfis {
    users: Array<IData>;
}
export interface RegisterType {
    name: String;
    age: Number;
    email: String;
    cpf: String;
    password: String;
}
