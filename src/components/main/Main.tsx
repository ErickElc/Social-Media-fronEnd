import React from "react";


//Config
import { useModalContext } from "../../context/modal.context";
import { useDataContext } from "../../context/dataContext";
import * as S from './styles';

//Components
import ModalPost from "../modal/modalPosts";
import PostTemplate from "../postTemplate";
import ModalEdit from "../modal/modalEdit";


// Libs
import Avatar from '@mui/material/Avatar';


export default function Main(){
    const dataContext = useDataContext();
    const {openModal} = useModalContext();
    const ToggleMode = () =>{
        openModal();
    }
    return(
       <S.MainComponent>
            <S.FeedComponent className="mt-4">
                {(dataContext.userData?.avatar) ? <S.AvatarImage src={dataContext.userData?.avatar} alt="/broken-image.jpg" className=""/>
                : <Avatar src="/broken-image.jpg" className="mr-3" style={{height: '70px', width: '70px'}}/>
                }
                <p className="text-white">{dataContext.userData?.name}</p>
            </S.FeedComponent>
            <S.ShareFeedComponnet className="mb-4">
                <Avatar src={dataContext.userData?.avatar} alt="/broken-image.jpg" className="mr-3"/>
                <S.InputComponent onClick={ToggleMode}><p>Faça uma postagem</p></S.InputComponent>
            </S.ShareFeedComponnet>
            <PostTemplate/>
            <ModalPost/>
            <ModalEdit/>
       </S.MainComponent>
    )
}