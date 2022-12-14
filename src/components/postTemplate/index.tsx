import { useEffect, useState } from "react";


// Config
import { useModalContextEditar } from "../../context/modalEditar";
import { getUserLocalStorage } from "../../auth/util";
import {  IPost } from "../../interface/Interface";
import http from "../../api/api";
import * as S from "./styles";

//libs
import { Avatar, Button } from "@mui/material";
import { Link } from "react-router-dom";



export default function PostTemplate(){
    const modalContext2 = useModalContextEditar();
    const User = getUserLocalStorage();
    const [id, setId] = useState<number>(0);
    const [postData, setPostData] = useState<Array<IPost> | []>([]);
    useEffect(()=>{
        http.get('api/posts/list/all')
            .then(res => {                
                setPostData(res.data)
            })
            .catch(err => console.log(err))
    },[])
    const deletePost = async (id: String) => {
      try {
          const response = await http.post(`api/posts/delete/${id}`,{
            token: User?.token,
            email: User?.email
          })
          if(response.status){
              alert('Post Excluido com sucesso');
              window.location.reload();
          }
        
      } catch (error) {
        console.log(error);
      }

    }
    const toogleMode = (id: string) => {
        modalContext2?.setId(id)
        modalContext2.openModal();
    }
    return(
        <div>
            <S.PubliContainer>
                {postData?.map((item: IPost, index) => (
                    <S.PostSchema key={item?._id} onChange={() => {setId(index)}}>
                        <div className="flex-row  justify-end content-end mb-1">
                            <div className="flex-row items-end content-end justify-end my-3">
                                {(item?.autor?._id === User._id) ? 
                                <Button variant='contained' onClick={() => deletePost(item._id)} > Deletar</Button> : ''}
                            </div>
                            <div className="flex-row items-end content-end justify-end my-3">
                                {(item?.autor?._id === User._id) ? 
                                <Button variant='outlined' onClick={() => toogleMode(item._id)} > Editar </Button> : ''}
                            </div>
                            <Link to={'/perfil/' + item?.autor?._id}>
                             <div className="flex">
                                    {(item?.autor?.avatar) ?<S.AvatarPostImage src={item?.autor?.avatar} alt="/broken-image.jpg" className="mr-3"/>
                                    : <Avatar src="/broken-image.jpg" className="mr-3" style={{height: '40px', width: '40px'}}/>
                                    }
                                    <p className="flex items-center">{item?.autor?.name}</p>
                                </div>


                                
                            </Link>
                        </div>
                        <div className="mt-3 mb-3">
                            <p>{item?.content}</p>
                        </div>
                        <div>
                            {(item?.image_url) ? (
                                <S.PostImage src={item?.image_url} alt={item?.content} className="self-center"/>
                            ) : ''}
                        </div>
                    </S.PostSchema>   
                ))}
            </S.PubliContainer>
        </div>
    )
}