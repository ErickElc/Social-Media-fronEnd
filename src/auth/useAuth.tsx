import { useContext } from "react";

import { AuthContext } from "./Auth";

export const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
};
