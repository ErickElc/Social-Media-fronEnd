import { IAuthProvider, IContext, IUser } from "./interfaces";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Config
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./util";
import http from "../api/api";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>();
    const navigate = useNavigate();

    useEffect(() => {
        const User = getUserLocalStorage();
        if (User) {
            setUser(User);
        }
    }, []);

    const VerifyLoggin = async () => {
        const User = getUserLocalStorage();
        try {
            await http.post("auth/free", {
                token: User?.token
            });
            return console.log("autorizado");
        } catch (error) {
            navigate("/login");
        }
    };
    const authenticate = async (email: string, password: string) => {
        const response = await LoginRequest(email, password);
        const payload = {
            token: response?.request.data,
            email,
            name: response?.dataRequest.name,
            _id: response?.dataRequest._id,
            age: response?.dataRequest.age,
            avatar: response?.dataRequest.avatar
        };
        setUser(payload);
        setUserLocalStorage(payload);
        return response?.request.status;
    };
    function logout() {
        setUser(null);
        setUserLocalStorage(null);
    }
    return (
        <AuthContext.Provider value={{ ...user, authenticate, logout, VerifyLoggin }}>{children}</AuthContext.Provider>
    );
};
