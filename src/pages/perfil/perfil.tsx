import { AvatarImage, AvatarPostImage, ContainerDivAutor, DivContainer, FeedComponent, PostImage, PostSchema, PubliContainer, SectionContainer } from '../../styles/components';
import { PrivateRoute } from '../../components/protectedLayout/protectedLayout';
import { useModalContextEditar } from '../../context/modalEditar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ModalEditar from '../../components/modal/modalEditar';
import { IPerfil, IPost} from '../../interface/Interface';
import { getUserLocalStorage } from '../../auth/util';
import { Avatar, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import http from '../../api/api';
import '../../styles/index.css'
export default function Perfil(){
    const modalContext2 = useModalContextEditar();
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
    const deletePost = async (id: String | undefined) => {
        try {
            const response = await http.post(`api/posts/delete/${id}`,{
              token: user?.token,
              email: user?.email
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
        <PrivateRoute>
            <SectionContainer> 
                <div>
                    <FeedComponent>
                        {(data?.avatar) ? <AvatarImage src={data?.avatar} alt="/broken-image.jpg" className=""/>
                        : <Avatar src="/broken-image.jpg" className="mr-3" style={{height: '70px', width: '70px'}}/>
                        }
                        <p className='mb-3 text-white'>{data?.name}</p>
                        {
                            user?._id === data?._id ? <Link to={route}><Button variant="contained">Editar Perfil</Button></Link> : ''
                        }
                    </FeedComponent>
                </div>
                <div>
                    <h2 className='font-bold text-center mb-4'>Ultimos posts: </h2>
                    <PubliContainer>
                        {postsPerfil.map((item: IPost) => (
                            <PostSchema key={item?._id}>
                                {(item?.autor?._id === user._id) ? 
                                <Button  style={{width: 100, margin: 10}}variant='contained' onClick={() => deletePost(item?._id)} > Deletar</Button> : ''}
                                {(item?.autor?._id === user._id) ? 
                                <Button variant='outlined' style={{width: 100, margin: 10}} onClick={() => toogleMode(item._id)} > Editar </Button> : ''}
                                <ContainerDivAutor>
                                    {(item?.autor?.avatar) 
                                    ? <AvatarPostImage src={item?.autor?.avatar} alt="/broken-image.jpg" className=""/>
                                    : <Avatar src="/broken-image.jpg" className="" style={{height: '40px', width: '40px'}}/>
                                    }
                                    <p className="flex-row  items-center ml-3">{item?.autor.name}</p>
                                </ContainerDivAutor>
                                <div className="mb-3">
                                    <p>{item?.content}</p>
                                </div>
                                <div>
                                    {(item?.image_url) ? <PostImage src={item?.image_url} alt={item?.content} className="self-center"/> : ''}
                                </div>
                            </PostSchema>   
                        ))}
                    </PubliContainer>
                </div>
                <ModalEditar/>
            </SectionContainer>
        </PrivateRoute>

    )


}