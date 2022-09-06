import { PostSchema } from "../../styles/components";
import Avatar from '@mui/material/Avatar';

export default function PostTemplate(){
    
    const name = 'your Name';
    return(
        <div className="flex flex-column justify-center">
            <PostSchema>
                <div className="flex flex-row">
                    <Avatar src="/broken-image.jpg" className="mr-3"/>
                    <p className="flex items-center">{name}</p>
                </div>
                <div>
                    <h4>CONTENajdhadjadhadjadjadahdjhajdahjdajdahdajdjjadjajhdahdjahjdjhT</h4>
                    <p>IMAGEM</p>
                </div>
            </PostSchema>
        </div>
    )
}