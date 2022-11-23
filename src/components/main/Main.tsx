import { AvatarImage, FeedComponent, InputComponent, MainComponent, ShareFeedComponnet } from "../../styles/components";
import { useModalContext } from "../../context/modal.context";
import { useDataContext } from "../../context/dataContext";
import ModalPost from "../modal/modalPosts";
import Avatar from '@mui/material/Avatar';
import PostTemplate from "../postTemplate";
import ModalEditar from "../modal/modalEditar";

export default function Main(){
    const dataContext = useDataContext();
    const {openModal} = useModalContext();
    const ToggleMode = () =>{
        openModal();
    }
    return(
       <MainComponent>
            <FeedComponent className="mt-4">
                {(dataContext.userData?.avatar) ? <AvatarImage src={dataContext.userData?.avatar} alt="/broken-image.jpg" className=""/>
                : <Avatar src="/broken-image.jpg" className="mr-3" style={{height: '70px', width: '70px'}}/>
                }
                <p className="text-white">{dataContext.userData?.name}</p>
            </FeedComponent>
            <ShareFeedComponnet className="mb-4">
                <Avatar src={dataContext.userData?.avatar} alt="/broken-image.jpg" className="mr-3"/>
                <InputComponent onClick={ToggleMode}><p>Faça uma postagem</p></InputComponent>
            </ShareFeedComponnet>
            <PostTemplate/>
            <ModalPost/>
            <ModalEditar/>
       </MainComponent>
    )
}