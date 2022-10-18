import { FeedComponent, FeedComponent2, InputComponent, MainComponent, ShareFeedComponnet } from "../../styles/components";
import { useModalContext } from "../../context/modal.context";
import { useDataContext } from "../../context/dataContext";
import ModalPost from "../modal/modalPosts";
import Avatar from '@mui/material/Avatar';

export default function Main(){
    const dataContext = useDataContext();
    const {openModal} = useModalContext();
    const ToggleMode = () =>{
        openModal();
    }
    return(
       <MainComponent>
            <FeedComponent className="mt-4">
                <Avatar src={dataContext.userData?.avatar} alt="/broken-image.jpg" className="mb-2"/>
                <p>{dataContext.userData?.name}</p>
            </FeedComponent>
            <ShareFeedComponnet className="mb-4">
                <Avatar src={dataContext.userData?.avatar} alt="/broken-image.jpg" className="mr-3"/>
                <InputComponent onClick={ToggleMode}><p>Faça uma postagem</p></InputComponent>
            </ShareFeedComponnet>
            <FeedComponent2 className="invisible">
                <Avatar src={dataContext.userData?.avatar} alt="/broken-image.jpg" className="mb-2"/>
                <p>{dataContext.userData?.name}</p>
            </FeedComponent2>
            <ModalPost/>
       </MainComponent>
    )
}