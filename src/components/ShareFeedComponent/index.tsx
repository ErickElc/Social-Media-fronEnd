// Config
import { IDataContext2 } from "../../interface/Interface";
import * as S from "./styles";

// Libs
import Avatar from "@mui/material/Avatar";

export default ({ dataContext, ToggleMode }: IDataContext2) => {
    return (
        <S.ShareFeedComponent className="mb-4">
            <Avatar src={dataContext.userData?.avatar} alt="/broken-image.jpg" className="mr-3" />
            <S.InputComponent onClick={ToggleMode}>
                <p>Faça uma postagem</p>
            </S.InputComponent>
        </S.ShareFeedComponent>
    );
};
