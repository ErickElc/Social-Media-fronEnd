import { getUserLocalStorage } from "../../auth/util";
import {useEffect, useState} from 'react'
import { useAuth } from "../../auth/useAuth";
import Header from "../../components/header";
import Main from "../../components/main/Main";
import PostTemplate from "../../components/postTemplate";
import http from "../../api/api";

export default function Home(){
    const user = getUserLocalStorage();
    const auth = useAuth();
    const [data, setData] = useState({});
    useEffect(() => {
        auth.VerifyLoggin();
        GetDataOfUser();
    },[])

    async function GetDataOfUser(){
        try {
            const Data = await http.post('/api/user-data',{
                token: user.token,
                email: user.email
            })
            console.log(Data);
            if(Data){
                return setData(Data.data);
            }
            return console.log('error');
        } catch (error) {
            console.log(error);
        }
    }
     
    return(
        <>
            <Header data={data}/>
            <Main data={data}/>
            <PostTemplate/>
        </>
    )
}