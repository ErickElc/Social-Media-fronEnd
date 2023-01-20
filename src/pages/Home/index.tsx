//Configs
import { ModalProvider } from "../../context/modal.context2";

//Components
import Main from "../../components/Main";

export default () => {
    return (
        <ModalProvider>
            <Main />
        </ModalProvider>
    );
};
