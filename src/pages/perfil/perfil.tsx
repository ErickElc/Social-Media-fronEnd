import { useEffect, useState } from "react";

//Config
import { PrivateRoute } from "../../components/protectedLayout/protectedLayout";
import { useModalContextEditar } from "../../context/modalEditar";
import { IData, IPost } from "../../interface/Interface";
import { getUserLocalStorage } from "../../auth/util";
import http from "../../api/api";
import "../../styles/index.css";
import * as S from "./styles";

// Libs
import { Link, useNavigate, useParams } from "react-router-dom";

//Componets
import ModalEditar from "../../components/modal/modalEditar";
import FeedComponent from "../../components/FeedComponent";
import PostTemplate from "../../components/postTemplate";

export default function Perfil() {
    const { id } = useParams();
    const navigate = useNavigate();
    const user = getUserLocalStorage();
    const [data, setData] = useState<IData>();
    const [postData, setPostsData] = useState([]);
    const modalContext2 = useModalContextEditar();

    useEffect(() => {
        http.get(`api/users/${id}`)
            .then((res) => {
                if (res.data !== null) {
                    setData(res.data);
                }
            })
            .catch((err) => {
                console.log(err);
                setData(err.response.status);
                navigate("/naoexiste");
            });
    }, []);

    useEffect(() => {
        http.get(`api/posts/list/user/${id}`)
            .then((res) => {
                setPostsData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const deletePost = async (id: String | undefined) => {
        try {
            const response = await http.post(`api/posts/delete/${id}`, {
                token: user?.token,
                email: user?.email
            });
            if (response.status) {
                alert("Post Excluído com sucesso");
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const toogleMode = (id: string) => {
        modalContext2?.setId(id);
        modalContext2.openModal();
    };

    return (
        <PrivateRoute>
            <S.SectionContainer>
                <FeedComponent dataContext={{ userData: data, setUserData: setData }} />
                <div>
                    <h2 className="font-bold text-center mb-4">Ultimos posts: </h2>
                    <PostTemplate deletePost={deletePost} toggleMode={toogleMode} postData={postData} />
                </div>
                <ModalEditar />
            </S.SectionContainer>
        </PrivateRoute>
    );
}
