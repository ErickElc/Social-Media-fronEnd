import { AvatarImage, AvatarPostImage, DivContainer, PostImage, PostSchema, PubliContainer, SectionContainer } from '../../styles/components';
import { ProtectedLayoutNoLogged } from '../../components/protectedLayout/protectedLayout';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IPerfil, IPost} from '../../interface/Interface';
import { getUserLocalStorage } from '../../auth/util';
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import http from '../../api/api';
import '../../styles/index.css'
export default function Perfil(){
    const {id} = useParams();
    const route = `/conta/${id}`;
    const [data, setData] = useState<IPerfil>();
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
        <ProtectedLayoutNoLogged>
            <SectionContainer> 
                <div>
                    <PubliContainer>
                        <PostSchema className='mt-4'>
                            <DivContainer className='flex-column'>
                                <AvatarImage src={data?.avatar} alt="/broken-image.jpg" className=""/>
                                <p className='mb-3'>{data?.name}</p>
                                <Button variant="outlined"><Link to={route}>Editar Perfil</Link></Button>
                            </DivContainer>
                        </PostSchema>   
                    </PubliContainer>
                </div>
        
                <div>
                    <h2 className='font-bold text-center mb-4'>Ultimos posts: </h2>
                    <PubliContainer>
                        {postsPerfil.map((item: IPost | null) => (
                            <PostSchema key={item?._id}>
                                <div className="flex flex-row mb-10">
                                    <AvatarPostImage src={item?.autor?.avatar} alt="/broken-image.jpg" className="mr-3"/>
                                    <p className="flex items-center">{item?.autor.name}</p>
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
            </SectionContainer>
        </ProtectedLayoutNoLogged>

    )


}