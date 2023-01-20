import { useEffect, useState } from "react";

//Config
import { useModalContextEditar } from "../../context/modalEditar";
import { useModalContext } from "../../context/modal.context";
import { useDataContext } from "../../context/dataContext";
import { getUserLocalStorage } from "../../auth/util";
import { IPost } from "../../interface/Interface";
import * as S from "./styles";

//Components
import ShareFeedComponent from "../ShareFeedComponent";
import ModalPost from "../Modais/ModalPosts";
import PostTemplate from "../PostTemplate";
import ModalEdit from "../Modais/ModalEdit";

// Libs
import FeedComponent from "../FeedComponent";
import http from "../../api/api";

export default () => {
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
    const toggleMode = () => {
        openModal();
    };

    const toggleMode2 = (id: string) => {
        modalContext2?.setId(id);
        modalContext2.openModal();
    };

    const deletePost = async (id: String) => {
        try {
            const response = await http.post(`api/posts/delete/${id}`, {
                token: User?.token,
                email: User?.email
            });
            if (response.status) {
                alert("Post Excluído com sucesso");
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <S.MainComponent>
            <FeedComponent dataContext={dataContext} />
            <ShareFeedComponent dataContext={dataContext} ToggleMode={toggleMode} />
            <PostTemplate deletePost={deletePost} toggleMode={toggleMode2} postData={postData} />
            <ModalPost />
            <ModalEdit />
        </S.MainComponent>
    );
};
