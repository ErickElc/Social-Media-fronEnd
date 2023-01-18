import { IDataContext2 } from "../../interface/Interface";
import Avatar from "@mui/material/Avatar";
import * as S from "./styles";

export default ({ dataContext }: IDataContext2) => {
    return (
        <S.FeedComponent className="mt-4">
            {dataContext.userData?.avatar ? (
                <S.AvatarImage src={dataContext.userData?.avatar} alt="/broken-image.jpg" className="" />
            ) : (
                <Avatar src="/broken-image.jpg" className="mr-3" style={{ height: "70px", width: "70px" }} />
            )}
            <p className="text-white">{dataContext.userData?.name}</p>
        </S.FeedComponent>
    );
};
