import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../api/api";

export default function Pesquisa(){
    const id = useParams();
    const [users, setUsers] = useState<any>([]);
    useEffect(() =>{
        http.get('api/users/all').then(res => setUsers(res.data)).catch(err => console.log(err));
    },[])
    function VerifyPesquisa(){
        let usersSearch = [];
        for(let i in users){
            if(id === users[i].name){
                usersSearch.push(users[i].name);
            }
        }
        return usersSearch;
    }
    console.log(VerifyPesquisa());
    return (
        <div>

        </div>
    )
}