import { DivContainer, PostSchema, PubliContainer, SectionContainer } from '../../styles/components';
import ModalPerfil from '../../components/modal/modalPerfil/ModalPerfil';
import { ModalHeaderProvider } from '../../context/modalHeader.context';
import { IPerfil, IPost} from '../../interface/Interface';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../components/header';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import http from '../../api/api';
import '../../styles/index.css'
import { ProtectedLayoutNoLogged } from '../../components/protectedLayout/protectedLayout';
export default function Perfil(){
    const {id} = useParams();
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
    },[]);
    return(
        <ProtectedLayoutNoLogged>
            <>
                <SectionContainer>
                    <div>
                        <PubliContainer>
                            <PostSchema className='mt-4'>
                                <DivContainer className='flex-column'>
                                    <Avatar src="/broken-image.jpg" className='mb-2' id='Avatar'/>
                                    <p className='mb-3'>{data?.name}</p>
                                    <Button variant="outlined">Editar Perfil</Button>
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
                                        <Avatar src="/broken-image.jpg" className="mr-3"/>
                                        <p className="flex items-center">{item?.autor.name}</p>
                                    </div>
                                    <div>
                                        <p>{item?.content}</p>
                                    </div>
                                </PostSchema>   
                            ))}
                        </PubliContainer>
                    </div>
                </SectionContainer>
           </>
        </ProtectedLayoutNoLogged>

    )


}