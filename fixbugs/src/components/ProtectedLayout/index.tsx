import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

//Configs
import { getUserLocalStorage } from "../../auth/util";
import http from "../../api/api";
interface IProtected {
    children: JSX.Element;
}

export const PrivateRoute = ({ children }: IProtected) => {
    const [logged, setLogged] = useState(false);
    const User = getUserLocalStorage();
    const navigate = useNavigate();
    useEffect(() => {
        http.post("auth/free", {
            token: User?.token,
            email: User?.email
        })
            .then((res) => {
                if (res.status === 202) {
                    setLogged(true);
                } else {
                    navigate("/login");
                }
            })
            .catch((err) => {
                setLogged(false);
                navigate("/login");
            });
    }, [User?.token, User?.email]);

    return logged ? <>{children}</> : <></>;
};

export const ProtectedLayoutLogged = ({ children }: { children: JSX.Element }) => {
    const [response, setResponse] = useState<Number | null>(null);
    const User = getUserLocalStorage();
    const navigate = useNavigate();

    if (User?.token) return navigate("/login");

    const VerifyLoggin = (status: Number | null) => {
        if (status === 200) {
            return <h1>Você não tem acesso</h1>;
        } else {
            return children;
        }
    };

    useEffect(() => {
        http.post("auth/free", {
            token: User?.token
        })
            .then((res) => setResponse(res.status))
            .catch((err) => {
                setResponse(err.response.status);
            });
    }, [User, navigate]);

    return VerifyLoggin(response);
};

export const ProtectedLayoutAdmin = ({ children }: { children: JSX.Element }) => {
    const [response, setResponse] = useState<Number | null>(null);
    const User = getUserLocalStorage();

    const VerifyLoggin = (status: Number | null) => {
        if (status === 200) {
            return children;
        } else {
            return <h1 className="font-bold text-2xl mt-10">ERROR: 404 Essa página não existee</h1>;
        }
    };

    useEffect(() => {
        http.post("auth/admin", {
            token: User?.token,
            email: User?.email
        })
            .then((res) => setResponse(res.status))
            .catch((err) => {
                setResponse(err.response.status);
            });
    }, [User?.token, User?.email]);

    return VerifyLoggin(response);
};
export const ProtectedLayoutPrivatePageUser = ({ children }: { children: JSX.Element }) => {
    const [response, setResponse] = useState<Number | null>(null);
    const User = getUserLocalStorage();
    const { id } = useParams();

    const VerifyLoggin = (status: Number | null) => {
        if (status === 202) {
            return children;
        } else {
            return <h1 className="font-bold text-2xl mt-10">ERROR: 404 Essa página não existe</h1>;
        }
    };

    useEffect(() => {
        http.post(`auth/private/free/${id}`, {
            token: User?.token,
            email: User?.email
        })
            .then((res) => setResponse(res.status))
            .catch((err) => {
                setResponse(err.response.status);
            });
    }, [User?.token, User?.email, id]);

    return VerifyLoggin(response);
};
