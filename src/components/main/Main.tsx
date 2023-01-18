import React, { useEffect, useState } from "react";

//Config
import { useModalContext } from "../../context/modal.context";
import { useDataContext } from "../../context/dataContext";
import * as S from "./styles";

//Components
import ModalPost from "../modal/modalPosts";
import PostTemplate from "../postTemplate";
import ModalEdit from "../modal/modalEdit";

// Libs
import FeedComponent from "../FeedComponent";
import Avatar from "@mui/material/Avatar";
import { useModalContextEditar } from "../../context/modalEditar";
import { getUserLocalStorage } from "../../auth/util";
import { IPost } from "../../interface/Interface";
import http from "../../api/api";

export default function Main() {
    const [postData, setPostData] = useState<Array<IPost> | []>([]);
    const modalContext2 = useModalContextEditar();
    const { openModal } = useModalContext();
    const dataContext = useDataContext();
    const User = getUserLocalStorage();

    useEffect(() => {
        http.get("api/posts/list/all")
            .then((res) => {
                setPostData(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const ToggleMode = () => {
        openModal();
    };

    const deletePost = async (id: String) => {
        try {
            const response = await http.post(`api/posts/delete/${id}`, {
                token: User?.token,
                email: User?.email
            });
            if (response.status) {
                alert("Post Excluido com sucesso");
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const toggleMode = (id: string) => {
        modalContext2?.setId(id);
        modalContext2.openModal();
    };
    return (
        <S.MainComponent>
            <FeedComponent dataContext={dataContext} />
            <S.ShareFeedComponent className="mb-4">
                <Avatar src={dataContext.userData?.avatar} alt="/broken-image.jpg" className="mr-3" />
                <S.InputComponent onClick={ToggleMode}>
                    <p>Faça uma postagem</p>
                </S.InputComponent>
            </S.ShareFeedComponent>
            <PostTemplate deletePost={deletePost} toggleMode={toggleMode} postData={postData} />
            <ModalPost />
            <ModalEdit />
        </S.MainComponent>
    );
}
