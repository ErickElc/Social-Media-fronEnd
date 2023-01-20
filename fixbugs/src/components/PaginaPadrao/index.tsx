import { PrivateRoute } from "../ProtectedLayout";
import { Outlet } from "react-router-dom";

// Components
import ModalPerfil from "../Modais/ModalPerfil";
import Header from "../Header";

export default ({ children }: { children?: React.ReactNode }) => {
    return (
        <PrivateRoute>
            <>
                <Header />
                <>
                    <Outlet />
                    {children}
                </>
                <ModalPerfil />
            </>
        </PrivateRoute>
    );
};
