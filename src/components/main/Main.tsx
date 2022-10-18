import { AvatarImage, FeedComponent, FeedComponent2, InputComponent, MainComponent, ShareFeedComponnet } from "../../styles/components";
import { useModalContext } from "../../context/modal.context";
import { useDataContext } from "../../context/dataContext";
import ModalPost from "../modal/modalPosts";
import Avatar from '@mui/material/Avatar';
import PostTemplate from "../postTemplate";

export default function Main(){
    const dataContext = useDataContext();
    const {openModal} = useModalContext();
    const ToggleMode = () =>{
        openModal();
    }
    return(
       <MainComponent>
            <FeedComponent className="mt-4">
                <AvatarImage src={dataContext.userData?.avatar} alt="/broken-image.jpg" className=""/>
                <p>{dataContext.userData?.name}</p>
            </FeedComponent>
            <ShareFeedComponnet className="mb-4">
                <Avatar src={dataContext.userData?.avatar} alt="/broken-image.jpg" className="mr-3"/>
                <InputComponent onClick={ToggleMode}><p>Faça uma postagem</p></InputComponent>
            </ShareFeedComponnet>
            <PostTemplate/>
            <ModalPost/>
       </MainComponent>
    )
}