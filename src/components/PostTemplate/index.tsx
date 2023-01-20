// Config
import { getUserLocalStorage } from "../../auth/util";
import { IPost } from "../../interface/Interface";
import * as types from "./interfaces";
import * as S from "./styles";

//libs
import { Avatar, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default ({ postData, deletePost, toggleMode: toggleMode }: types.IPostTemplate) => {
    const User = getUserLocalStorage();

    return (
        <S.PubliContainer>
            {postData?.map((item: IPost, index: number) => (
                <S.PostSchema key={item?._id}>
                    <S.PostTop className="flex-row justify-between content-end mb-1">
                        <div className="flex-row items-end content-end justify-end my-3">
                            {item?.autor?._id === User._id ? (
                                <Button variant="contained" onClick={() => deletePost(item._id)}>
                                    Deletar
                                </Button>
                            ) : null}
                        </div>
                        <div className="flex-row items-end content-end justify-end my-3">
                            {item?.autor?._id === User._id ? (
                                <Button variant="outlined" onClick={() => toggleMode(item._id)}>
                                    Editar
                                </Button>
                            ) : null}
                        </div>
                    </S.PostTop>
                    <Link to={"/perfil/" + item?.autor?._id}>
                        <div className="flex">
                            {item?.autor?.avatar ? (
                                <S.AvatarPostImage src={item?.autor?.avatar} alt="/broken-image.jpg" className="mr-3" />
                            ) : (
                                <Avatar
                                    src="/broken-image.jpg"
                                    className="mr-3"
                                    style={{ height: "50px", width: "50px" }}
                                />
                            )}
                            <S.AutorText className="flex items-center ">{item?.autor?.name}</S.AutorText>
                        </div>
                    </Link>
                    <div className="mt-3 mb-3">
                        <S.ContentPost>{item?.content}</S.ContentPost>
                    </div>
                    <div>
                        {item?.image_url ? (
                            <S.PostImage src={item?.image_url} alt={item?.content} className="self-center" />
                        ) : null}
                    </div>
                </S.PostSchema>
            ))}
        </S.PubliContainer>
    );
};
