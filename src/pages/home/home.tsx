import { PrivateRoute} from "../../components/protectedLayout/protectedLayout";
import Main from "../../components/main/Main";

export default function Home(){
    return(
        <PrivateRoute>
            <Main/>
        </PrivateRoute>
    )
}