import { getUserLocalStorage } from "../../auth/util";
import {useEffect, useState} from 'react'
import { useAuth } from "../../auth/useAuth";
import Header from "../../components/header";
import Main from "../../components/main/Main";
import PostTemplate from "../../components/postTemplate";
import http from "../../api/api";
import { ModalHeaderProvider } from "../../context/modalHeader.context";
import ModalPerfil from "../../components/modal/modalPerfil/ModalPerfil";

export default function Home(){
    const user = getUserLocalStorage();
    const auth = useAuth();
    const [data, setData] = useState({});
    auth.VerifyLoggin();
    useEffect(() => {
        GetDataOfUser();
    },[])

    async function GetDataOfUser(){
        try {
            const Data = await http.post('/api/users/user-data',{
                token: user.token,
                email: user.email
            })
            if(Data){
                return setData(Data.data);
            }
            return console.log('error');
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <ModalHeaderProvider>
            <>
                <Header/>
                <Main data={data}/>
                <PostTemplate/>
                <ModalPerfil data={data}/>
            </>
        </ModalHeaderProvider>
    )
}