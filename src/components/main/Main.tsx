import { FeedComponent, InputComponent, MainComponent, ShareFeedComponnet } from "../../styles/components";
import Avatar from '@mui/material/Avatar';
import ModalPost from "../modal/modalPosts";
import { useModalContext } from "../../context/modal.context";

export default function Main(props :any){
    const {openModal} = useModalContext();
    const ToggleMode = () =>{
        openModal();
    }
    
    return(
       <MainComponent>
            <FeedComponent className="mt-4">
                <Avatar src="/broken-image.jpg" className="mb-2"/>
                <p>{props.data.name}</p>
            </FeedComponent>
            <ShareFeedComponnet className="">
                <Avatar src="/broken-image.jpg" className="mr-3"/>
                <InputComponent onClick={ToggleMode}><p>Faça uma postagem</p></InputComponent>
            </ShareFeedComponnet>
            <FeedComponent className="invisible">
                <Avatar src="/broken-image.jpg" className="mb-2"/>
                <p>{props.data.name}</p>
            </FeedComponent>
            <ModalPost props={props.data}/>
       </MainComponent>
    )
}