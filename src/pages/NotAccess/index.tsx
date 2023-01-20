import { useNavigate } from "react-router-dom";

export default () => {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate("/login");
    }, 2000);

    return (
        <div>
            <h1 className="font-bold">Você não tem acesso!</h1>
        </div>
    );
};
