import { AvatarPostImage, PostImage, PostSchema, PubliContainer } from "../../styles/components";
import { IComments, IPost } from "../../interface/Interface";
import { getUserLocalStorage } from "../../auth/util";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../../api/api";

export default function PostTemplate(){

    const User = getUserLocalStorage();
    const [comments, setComments] = useState([]);
    const [id, setId] = useState<number>(0);
    const [postData, setPostData] = useState<Array<IPost> | []>([]);
    const [inputs, setInputs] = useState({
        comments: ''
    });
    useEffect(()=>{
        http.get('api/posts/list/all')
            .then(res => {                
                setPostData(res.data)
            })
            .catch(err => console.log(err))
        http.get('api/comments/list/all')
            .then(res => {setComments(res.data)})
            .catch(err => {console.log(err)});
    },[])
    const SubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await http.post('api/comments/new',{
                token: User?.token,
                postId:  postData[id]?._id,
                autorId: User?._id,
            });
            if(response.status === 202){
                alert('comentário feito com sucesso!')
                window.location.reload()
            }
        } catch (error) {
            alert('Não foi possível fazer esse comentário')
        }
    }
    // {/* <div className="flex-column items-end content-end my-3">
    //     {(item?.autor?._id === user._id) ? <Button variant='outlined' >Editar</Button> : ''}
    //     {(item?.autor?._id === user._id) ? <Button variant='contained'>Deletar</Button> : ''}
    // </div> */}
    return(
        <div>
            <PubliContainer>
                {postData?.map((item: IPost, index) => (
                    <PostSchema key={item?._id} onChange={() => {setId(index)}}>
                        <div className="flex-row mb-1">
                            <Link to={'/perfil/' + item?.autor?._id}>
                                <div className="flex">
                                    <AvatarPostImage src={item?.autor?.avatar} alt="/broken-image.jpg" className="mr-3"/>
                                    <p className="flex items-center">{item?.autor?.name}</p>
                                </div>
                            </Link>
                        </div>
                        <div className="mt-3 mb-3">
                            <p>{item?.content}</p>
                        </div>
                        <div>
                            {(item?.image_url) ? (
                                <PostImage src={item?.image_url} alt={item?.content} className="self-center"/>
                            ) : ''}
                        </div>
                        <form className="" onSubmit={SubmitForm}>
                            <TextField
                                id={item?._id}
                                label="Escreva algo sobre essa publicação" 
                                variant="standard"
                                value={inputs.comments}
                                fullWidth
                                required
                                type='text'
                                onChange={(e) => setInputs(prev => ({...prev, comments: e.target.value}))}
                            />
                            <span className="mb-3"></span>
                            <Button fullWidth variant="contained">Enviar</Button>
                        </form>
                        <div className="">
                            {
                                comments?.map((items: IComments) => (items?._id === item?._id) ? (
                                    <>
                                        <AvatarPostImage src={items?.autorId?.avatar} alt="/broken-image.jpg" className="mr-3"/>
                                        <h2>{items?.content}</h2>
                                    </>
                                ) : (
                                    ''
                                ))
                            }
                        </div>
                    </PostSchema>   
                ))}
            </PubliContainer>
        </div>
    )
}