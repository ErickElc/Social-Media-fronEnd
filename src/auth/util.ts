import { IData } from "../interface/Interface";
import http from "../api/api";

export const setUserLocalStorage = (user: IData | null) => {
    localStorage.setItem("u", JSON.stringify(user));
};

export const getUserLocalStorage = () => {
    const json = localStorage.getItem("u");
    if (!json) return null;

    const user = JSON.parse(json);

    return user ?? null;
};

export const LoginRequest = async (email: string, password: string) => {
    try {
        const request = await http.post("api/users/login", { email, password });
        const dataRequest = await http.post("api/users/list/email", { email: email, token: request.data });
        console.log(dataRequest.data);
        return { request: request, dataRequest: dataRequest.data };
    } catch (error) {
        return null;
    }
};
