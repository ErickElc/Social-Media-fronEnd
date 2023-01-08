import Main from "../../components/main/Main";
import { ModalContext, ModalProvider } from "../../context/modal.context2";

export default function Home(){
    return(
        <ModalProvider>
            <Main/>
        </ModalProvider>
    )
}