import { useEffect, useState } from "react";

//Config
import { PrivateRoute } from "../../components/ProtectedLayout";
import { useModalContextEditar } from "../../context/modalEditar";
import { IData, IPost } from "../../interface/Interface";
import { getUserLocalStorage } from "../../auth/util";
import http from "../../api/api";
import "../../styles/index.css";
import * as S from "./styles";

// Libs
import { Link, useNavigate, useParams } from "react-router-dom";

//Componets
import ModalEditar from "../../components/Modais/ModalEditar";
import FeedComponent from "../../components/FeedComponent";
import PostTemplate from "../../components/PostTemplate";

export default () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const user = getUserLocalStorage();
    const [data, setData] = useState<IData>();
    const [postData, setPostsData] = useState([]);
    const modalContext2 = useModalContextEditar();

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

    const toggleMode = (id: string) => {
        modalContext2?.setId(id);
        modalContext2.openModal();
    };

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

    return (
        <PrivateRoute>
            <S.SectionContainer>
                <FeedComponent dataContext={{ userData: data, setUserData: setData }} />
                <div>
                    <h2 className="font-bold text-center mb-4">Últimos posts: </h2>
                    <PostTemplate deletePost={deletePost} toggleMode={toggleMode} postData={postData} />
                </div>
                <ModalEditar />
            </S.SectionContainer>
        </PrivateRoute>
    );
};
