import { useState } from "react";

//Config
import { useModalContext2 } from "../../../context/modal.context2";
import { getUserLocalStorage } from "../../../auth/util";
import * as S from "../../../styles/components";
import { useAuth } from "../../../auth/useAuth";
import http from "../../../api/api";
import "./styles.scss";

/// Libs
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import Modal from "@mui/material/Modal";

export default () => {
    //Contexts
    const { token } = useAuth();
    const user = getUserLocalStorage();
    const modalContext = useModalContext2();

    // States
    const [files, setFiles] = useState<File | null>(null);
    const [inputs, setInputs] = useState({
        content: ""
    });

    const ToggleMode = () => {
        modalContext.openModal();
    };

    const VerifyImages = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            setFiles(e.target.files[0]);
        }
        return setFiles(null);
    };

    const SubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (user?.habilitado === false) {
            return alert("Você não pode fazer um post");
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
            url: "api/users/update/" + user._id,
            method: "PUT",
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

    return (
        <Modal
            open={modalContext.modalState.open === true ? true : false}
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
                        inputProps={{ maxLength: 60 }}
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
