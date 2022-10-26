import ModalPerfil from "../modal/modalPerfil/ModalPerfil";
import { Outlet } from "react-router-dom";
import Header from "../header";
import { PrivateRoute } from "../protectedLayout/protectedLayout";


export default function PaginaPadrao({children} : {children?: React.ReactNode}){
    return(
        <PrivateRoute>
            <>
                <Header/>
                <>  
                    <Outlet/>
                    {children}
                </>
                <ModalPerfil/>
            </>
        </PrivateRoute>
    )
}