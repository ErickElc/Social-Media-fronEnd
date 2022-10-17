import { ProtectedLayoutNoLogged } from "../../components/protectedLayout/protectedLayout";
import PostTemplate from "../../components/postTemplate";
import { getUserLocalStorage } from "../../auth/util";
import Main from "../../components/main/Main";
import {useEffect, useState} from 'react';
import http from "../../api/api";

export default function Home(){
    const user = getUserLocalStorage();
    const [data, setData] = useState({});
    useEffect(() => {
        GetDataOfUser();
    },[])

    async function GetDataOfUser(){
        try {
            const Data = await http.get(`api/users/${user._id}`);
            if(Data){
                return setData(Data.data);
            }
            return console.log('error');
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <ProtectedLayoutNoLogged>
            <>
                <Main data={data}/>
                <PostTemplate/>
            </>
        </ProtectedLayoutNoLogged>
    )
}