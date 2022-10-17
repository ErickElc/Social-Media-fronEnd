import ModalPerfil from "../modal/modalPerfil/ModalPerfil";
import { Outlet } from "react-router-dom";
import Header from "../header";


export default function PaginaPadrao({children} : {children?: React.ReactNode}){
    return(
        <>
            <Header/>
            <>  
                <Outlet/>
                {children}
            </>
            <ModalPerfil/>
        </>
    )
}