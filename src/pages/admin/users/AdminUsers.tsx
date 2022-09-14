import { useEffect, useState } from "react";
import http from "../../../api/api";
import { IUser } from "../../../auth/interfaces";

export default function AdminUsers(){
    const [users, setUsers] = useState<IUser[]>();
    useEffect(()=>{
        http.get('api/users').then((res)=>{
            setUsers(res.data);
        }).catch(err => {
            console.log(err)
        })
    }
    ,[])
    return(
        <div>
            
        </div>

    )
}