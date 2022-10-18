import { AvatarPostImage, PostImage, PostSchema, PubliContainer } from "../../styles/components";
import { getUserLocalStorage } from "../../auth/util";
import { IPost } from "../../interface/Interface";
import { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import http from "../../api/api";
import { Button } from "@mui/material";
export default function PostTemplate(){
    
    const [postData, setPostData] = useState([]);
    const user = getUserLocalStorage();
    useEffect(()=>{
        http.get('api/posts/list/all').then(res => {                
                setPostData(res.data)
            })
            .catch(err => console.log(err))
    },[])
    return(
        <div>
            <PubliContainer>
                {postData?.map((item: IPost) => (
                    <PostSchema key={item._id}>
                        {/* <div className="flex-column items-end content-end my-3">
                            {(item?.autor?._id === user._id) ? <Button variant='outlined' >Editar</Button> : ''}
                            {(item?.autor?._id === user._id) ? <Button variant='contained'>Deletar</Button> : ''}
                        </div> */}
                        <div className="flex flex-row mb-1">
                            <AvatarPostImage src={item?.autor?.avatar} alt="/broken-image.jpg" className="mr-3"/>
                            <p className="flex items-center">{item?.autor?.name}</p>
                        </div>
                        <div className="mt-3 mb-3">
                            <p>{item?.content}</p>
                        </div>
                        <div>
                            <PostImage src={item?.image_url} alt={item?.content} className="self-center"/>
                        </div>
                    </PostSchema>   
                ))}
            </PubliContainer>
        </div>
    )
}