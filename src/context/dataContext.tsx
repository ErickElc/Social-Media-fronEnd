import { createContext } from "react";
import { useState, useContext, useEffect} from 'react'
import http from "../api/api";
import { getUserLocalStorage } from "../auth/util";
import { IData, IDataContext } from "../interface/Interface";



export const DataContext = createContext<IDataContext>({} as IDataContext);


export const DataProvider = ({children}: {children: JSX.Element[] | JSX.Element}) =>{
    const [userData, setUserData] = useState<IData | undefined>();
    const user = getUserLocalStorage();
    useEffect(()=>{
        http.post('api/users/list/email',{
            token: user?.token,
            email: user?.email
        }).then((res)=>{
            setUserData(res.data);
        }).catch(err => console.log(err));
    },[user?.token, user?.email])
    return <DataContext.Provider value={{userData, setUserData}}>{children}</DataContext.Provider>
}
export const useDataContext = () => {
    const context = useContext(DataContext);
    return context;
}