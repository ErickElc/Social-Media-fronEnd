import { useEffect, useState } from "react";

//Config
import { useModalContextEditar } from "../../../context/modalEditar";
import { getUserLocalStorage } from "../../../auth/util";
import { IData } from "../../../interface/Interface";
import { useAuth } from "../../../auth/useAuth";
import * as S from "../../../styles/components";
import http from "../../../api/api";
import "./styles.scss";

//Components
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import Modal from "@mui/material/Modal";

export default () => {
    const modalContext2 = useModalContextEditar();
    const user = getUserLocalStorage();
    const { token } = useAuth();

    const [userData, setUserData] = useState<IData | undefined>();
    const [files, setFiles] = useState<File | null>(null);
    const [inputs, setInputs] = useState({
        content: ""
    });

    const ToggleMode = () => {
        modalContext2.openModal();
    };

    const VerifyImages = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            setFiles(e.target.files[0]);
        } else {
            setFiles(null);
        }
    };

    const SubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (userData?.habilitado === false) {
            return alert("Você não editar seus posts, Habilite sua conta novamente!");
        }
        const formData = new FormData();
        formData.append("content", inputs.content);
        formData.append("autor", user._id);
        if (user?.email) {
            formData.append("email", user.email);
        }
        if (token) {
            formData.append("token", token);
        }
        if (files) {
            formData.append("file", files);
        }
        http.request({
            url: "api/posts/edit/" + modalContext2.id,
            method: "Put",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            data: formData
        })
            .then((res) => {
                alert("Post editado com sucesso!");
                window.location.reload();
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        http.get("api/users/" + user._id)
            .then((res) => {
                setUserData(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <Modal
            open={modalContext2.modalState.open === true ? true : false}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={S.StyleForm}>
                <div>
                    <button onClick={ToggleMode} className="Button-back">
                        X
                    </button>
                </div>
                <S.FormComponent method="post" onSubmit={SubmitForm} className="mx-10">
                    <TextField
                        className="inputPost"
                        id="outlined-basic"
                        label="Escreva algo sobre a publicação"
                        variant="outlined"
                        required
                        type="text"
                        onChange={(e) => setInputs((prev) => ({ ...prev, content: e.target.value }))}
                    />
                    <input type="file" className="self-center m-4" onChange={VerifyImages} />
                    <Button variant="contained" className="ButtonLogin" type="submit">
                        Enviar Post
                    </Button>
                </S.FormComponent>
            </Box>
        </Modal>
    );
};
