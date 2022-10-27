import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../api/api";

export default function Pesquisa(){
    const id = useParams();
    const [users, setUsers] = useState<any>([]);
    const [selectUsers, setSelectUsers] = useState<any>([]);
    useEffect(() =>{
        http.get('api/users/all')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err));
        VerifyPesquisa()
    },[VerifyPesquisa()])
    function VerifyPesquisa(){
        for(let i in users){
            if(id === users[i].name){
                setSelectUsers((prev: any) => ([...prev, users[i]]))
            }
        }
    }
    return (
        <div>
            {selectUsers?.map((item:any) => (
                <p>{item?.name}</p>
            ))}
        </div>
    )
}