import { PostImage, PostSchema, PubliContainer } from "../../styles/components";
import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from "react";
import http from "../../api/api";
import { IPost } from "../../interface/Interface";
export default function PostTemplate(){
    
    const [postData, setPostData] = useState([]);

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
                        <div className="flex flex-row mb-10">
                            <Avatar src="/broken-image.jpg" className="mr-3"/>
                            <p className="flex items-center">{item?.autor?.name}</p>
                        </div>
                        <div>
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