export interface IUser {
    email?: string;
    token?: string;
    _id?: string;
}

export interface IContext extends IUser {
    authenticate: (email: string, password: string) => Promise<number | undefined>;
    logout: () => void;
    VerifyLoggin: () => void;
}

export interface IAuthProvider {
    children: JSX.Element[] | JSX.Element;
}
