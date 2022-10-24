import { AvatarImage, AvatarPostImage, DivContainer, FeedComponent, PostImage, PostSchema, PubliContainer, SectionContainer } from '../../styles/components';
import { PrivateRoute } from '../../components/protectedLayout/protectedLayout';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IPerfil, IPost} from '../../interface/Interface';
import { useEffect, useState } from 'react';
import { Avatar, Button } from '@mui/material';
import http from '../../api/api';
import '../../styles/index.css'
import { getUserLocalStorage } from '../../auth/util';
export default function Perfil(){
    const {id} = useParams();
    const route = `/conta/${id}`;
    const [data, setData] = useState<IPerfil>();
    const user = getUserLocalStorage();
    const [postsPerfil, setPostsPerfil] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        http.get(`api/users/${id}`).then((res)=>{
            if(res.data !== null){
                setData(res.data)
            }
        }).catch(err => {
            console.log(err)
            setData(err.response.status);
            navigate('/naoexiste')
        })
    },[])
    useEffect(()=>{
        http.get(`api/posts/list/user/${id}`).then((res)=> {
            setPostsPerfil(res.data);
        }).catch(err => {
            console.log(err)
        })
    },[])
    return(
        <PrivateRoute>
            <SectionContainer> 
                <div>
                    <FeedComponent>
                        {(data?.avatar) ? <AvatarImage src={data?.avatar} alt="/broken-image.jpg" className=""/>
                        : <Avatar src="/broken-image.jpg" className="mr-3" style={{height: '70px', width: '70px'}}/>
                        }
                        <p className='mb-3 text-white'>{data?.name}</p>
                        {
                            user?._id === data?._id ? <Button variant="contained"><Link to={route}>Editar Perfil</Link></Button> : ''
                        }
                    </FeedComponent>
                </div>
                <div>
                    <h2 className='font-bold text-center mb-4'>Ultimos posts: </h2>
                    <PubliContainer>
                        {postsPerfil.map((item: IPost | null) => (
                            <PostSchema key={item?._id}>
                                <div className="flex flex-row mb-10">
                                    {(item?.autor?.avatar) ? <AvatarPostImage src={item?.autor?.avatar} alt="/broken-image.jpg" className="mr-3"/>
                                    : <Avatar src="/broken-image.jpg" className="mr-3" style={{height: '40px', width: '40px'}}/>
                                    }
                                    <p className="flex items-center">{item?.autor.name}</p>
                                </div>
                                <div>
                                    <p>{item?.content}</p>
                                </div>
                                <div>
                                    {(item?.image_url) ? <PostImage src={item?.image_url} alt={item?.content} className="self-center"/> : ''}
                                </div>
                            </PostSchema>   
                        ))}
                    </PubliContainer>
                </div>
            </SectionContainer>
        </PrivateRoute>

    )


}