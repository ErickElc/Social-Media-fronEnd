import { FormComponent, StyleForm } from "../../../styles/components";
import { useModalContext } from "../../../context/modal.context";
import { getUserLocalStorage } from "../../../auth/util";
import { IData } from "../../../interface/Interface";
import { useAuth } from "../../../auth/useAuth";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import http from "../../../api/api";
import "./style.scss";
export default function ModalPost() {
    const modalContext = useModalContext();
    const [inputs, setInputs] = useState({
        content: ""
    });
    const [userData, setUserData] = useState<IData | undefined>();
    const [files, setFiles] = useState<File | null>(null);
    const { token } = useAuth();
    const user = getUserLocalStorage();
    const VerifyImages = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            setFiles(e.target.files[0]);
        } else {
            setFiles(null);
        }
    };
    useEffect(() => {
        http.get("api/users/" + user._id)
            .then((res) => {
                setUserData(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    async function SubmitForm(e: any) {
        e.preventDefault();
        if (userData?.habilitado === false) {
            return alert("Você não pode fazer um post, Habilite sua conta novamente!");
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
            url: "api/posts/new",
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            data: formData
        })
            .then((res) => {
                alert("Post criado com sucesso!");
                window.location.reload();
            })
            .catch((err) => console.log(err));
    }
    function ToggleMode() {
        modalContext.openModal();
    }

    return (
        <Modal
            open={modalContext.modalState.open === true ? true : false}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={StyleForm}>
                <div>
                    <button onClick={ToggleMode} className="Button-back">
                        X
                    </button>
                </div>
                <FormComponent method="post" onSubmit={SubmitForm} className="mx-10">
                    <TextField
                        className="inputPost"
                        id="outlined-basic"
                        label="Escreva algo sobre a publicação"
                        variant="outlined"
                        required
                        type="text"
                        inputProps={{ maxLength: 60 }}
                        onChange={(e) => setInputs((prev) => ({ ...prev, content: e.target.value }))}
                    />
                    <input type="file" className="self-center m-4" onChange={VerifyImages} />
                    <Button variant="contained" className="ButtonLogin" type="submit">
                        Enviar Post
                    </Button>
                </FormComponent>
            </Box>
        </Modal>
    );
}
