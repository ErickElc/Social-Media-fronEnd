import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// Config
import { getUserLocalStorage } from "../../auth/util";
import { IData } from "../../interface/Interface";
import { useAuth } from "../../auth/useAuth";
import http from "../../api/api";

// Libs
import { Button } from "@mui/material";

export default () => {
    const user = getUserLocalStorage();
    const navigate = useNavigate();
    const { id } = useParams();
    const auth = useAuth();

    const [select, setSelect] = useState<Boolean | undefined>();
    const [files, setFiles] = useState<File | null>(null);
    const [userData, setUserData] = useState<IData>();
    const [open, setOpen] = useState(false);
    const [inputs, setInputs] = useState({
        name: "",
        age: "",
        email: "",
        cpf: ""
    });

    const VerifyImages = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            setFiles(e.target.files[0]);
        } else {
            setFiles(null);
        }
    };

    const HandleButton = () => {
        setOpen((prev) => !prev);
    };

    const SubmitForm = async () => {
        try {
            const response = await http.put("api/users/update/" + id, {
                name: inputs.name,
                age: inputs.age,
                email: inputs?.email,
                cpf: inputs.cpf,
                token: user?.token,
                habilitado: select
            });
            if (response.status === 200) {
                alert("Conta Atualizada com sucesso!");
                HandleButton();
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const DeleteUser = async () => {
        try {
            const request = await http.post("api/users/remove/" + id, {
                token: user?.token,
                email: userData?.email
            });
            if (request.status === 200) {
                auth.logout();
                alert("Usuário Deletado");
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const SubmitImage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        if (user?.email) {
            formData.append("email", user.email);
        }
        if (user?.token) {
            formData.append("token", user?.token);
        }
        if (files) {
            formData.append("file", files);
        }
        http.request({
            url: "api/users/edit/avatar/" + id,
            method: "PUT",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            data: formData
        })
            .then((res) => {
                alert("foto Editada com sucesso");
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        http.get("api/users/" + id)
            .then((res) => {
                setInputs({
                    name: res.data.name,
                    age: res.data.age,
                    email: res.data.email,
                    cpf: res.data.cpf
                });
                setSelect(res.data.habilitado);
                setUserData(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="flex-column items-center justify-center m-8">
            <form className="flex-column">
                <div className="text-end m-3 mr-0">
                    <Button variant="contained" type="button" onClick={DeleteUser} style={{ marginRight: 10 }}>
                        Deletar User
                    </Button>
                    {open === false ? (
                        <Button variant="outlined" type="button" onClick={HandleButton}>
                            Editar
                        </Button>
                    ) : (
                        <Button variant="contained" onClick={SubmitForm}>
                            Salvar
                        </Button>
                    )}
                </div>
                <div className="flex justify-between text-xl mb-2">
                    <h3>Nome:</h3>
                    {open === false ? (
                        <div>
                            <input className="px-4" type="text" disabled value={inputs.name} />
                        </div>
                    ) : (
                        <input
                            className="border-solid"
                            type="text"
                            required
                            value={inputs.name}
                            onChange={(e) => setInputs((prev) => ({ ...prev, name: e.target.value }))}
                        />
                    )}
                </div>
                <div className="flex justify-between text-xl mb-2">
                    <h3>Idade:</h3>
                    {open === false ? (
                        <div>
                            <input className="px-4" type="text" disabled value={inputs.age} />
                        </div>
                    ) : (
                        <input
                            className="border-solid"
                            type="text"
                            required
                            value={inputs.age}
                            onChange={(e) => setInputs((prev) => ({ ...prev, age: e.target.value }))}
                        />
                    )}
                </div>
                <div className="flex justify-between text-xl mb-2">
                    <h3>Email:</h3>
                    {open === false ? (
                        <div>
                            <input className="px-4 pr-6" type="text" disabled value={inputs.email} />
                        </div>
                    ) : (
                        <input
                            className="border-solid"
                            type="text"
                            required
                            value={inputs.email}
                            onChange={(e) => setInputs((prev) => ({ ...prev, email: e.target.value }))}
                        />
                    )}
                </div>
                <div className="flex justify-between text-xl mb-2">
                    <h3>CPF:</h3>
                    {open === false ? (
                        <div>
                            <input className="px-4 pr-6" type="text" disabled value={inputs.cpf} />
                        </div>
                    ) : (
                        <input
                            className="border-solid"
                            type="text"
                            required
                            value={inputs.cpf}
                            minLength={11}
                            maxLength={11}
                            onChange={(e) => setInputs((prev) => ({ ...prev, cpf: e.target.value }))}
                        />
                    )}
                </div>
                <div className="flex justify-between text-xl mb-2">
                    <h3>Habilitado:</h3>
                    {open === false ? (
                        <div>
                            <select
                                disabled
                                value={select === true ? "true" : "false"}
                                onChange={(e) => setSelect(e.target.value === "true" ? true : false)}
                            >
                                <option value="true">Habilitado</option>
                                <option value="false">Desabilitado</option>
                            </select>
                        </div>
                    ) : (
                        <div>
                            <select
                                value={select === true ? "true" : "false"}
                                onChange={(e) => setSelect(e.target.value === "true" ? true : false)}
                            >
                                <option value="true">Habilitado</option>
                                <option value="false">Desabilitado</option>
                            </select>
                        </div>
                    )}
                </div>
            </form>
            <form className="flex-column" onSubmit={SubmitImage}>
                <input type="file" className="self-center m-4" onChange={VerifyImages} />
                <button>Trocar Imagem</button>
            </form>
        </div>
    );
};
