import { useEffect, useState } from 'react';

//Config
import { PrivateRoute } from '../../components/protectedLayout/protectedLayout';
import { useModalContextEditar } from '../../context/modalEditar';
import { IPerfil, IPost} from '../../interface/Interface';
import { getUserLocalStorage } from '../../auth/util';
import http from '../../api/api';
import '../../styles/index.css'
import * as S from './styles';

// Libs
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';

//Componets
import ModalEditar from '../../components/modal/modalEditar';

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
            <S.SectionContainer> 
                <div>
                    <S.FeedComponent>
                        {(data?.avatar) ? <S.AvatarImage src={data?.avatar} alt="/broken-image.jpg" className=""/>
                        : <Avatar src="/broken-image.jpg" className="mr-3" style={{height: '70px', width: '70px'}}/>
                        }
                        <p className='mb-3 text-white'>{data?.name}</p>
                        {
                            user?._id === data?._id ? <Link to={route}><Button variant="contained">Editar Perfil</Button></Link> : ''
                        }
                    </S.FeedComponent>
                </div>
                <div>
                    <h2 className='font-bold text-center mb-4'>Ultimos posts: </h2>
                    <S.PubliContainer>
                        {postsPerfil.map((item: IPost) => (
                            <S.PostSchema key={item?._id}>
                                {(item?.autor?._id === user._id) ? 
                                <Button  style={{width: 100, margin: 10}}variant='contained' onClick={() => deletePost(item?._id)} > Deletar</Button> : ''}
                                {(item?.autor?._id === user._id) ? 
                                <Button variant='outlined' style={{width: 100, margin: 10}} onClick={() => toogleMode(item._id)} > Editar </Button> : ''}
                                <S.ContainerDivAutor>
                                    {(item?.autor?.avatar) 
                                    ? <S.AvatarPostImage src={item?.autor?.avatar} alt="/broken-image.jpg" className=""/>
                                    : <Avatar src="/broken-image.jpg" className="" style={{height: '40px', width: '40px'}}/>
                                    }
                                    <p className="flex-row  items-center ml-3">{item?.autor.name}</p>
                                </S.ContainerDivAutor>
                                <div className="mb-3">
                                    <p>{item?.content}</p>
                                </div>
                                <div>
                                    {(item?.image_url) ? <S.PostImage src={item?.image_url} alt={item?.content} className="self-center"/> : ''}
                                </div>
                            </S.PostSchema>   
                        ))}
                    </S.PubliContainer>
                </div>
                <ModalEditar/>
            </S.SectionContainer>
        </PrivateRoute>

    )


}