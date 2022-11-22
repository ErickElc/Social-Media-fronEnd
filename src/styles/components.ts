import styled from 'styled-components';

export const DivBody = styled.div`
    display:flex;
    height: 100vh;
    /* overflow-y: hidden; */
    padding: 30px;
    @media (max-height: 600px) {
        justify-content: flex-end;
        padding-top: 200px;
    }
    justify-content: center;
    overflow-x: hidden;
    align-items: center;

`
export const MainComponent = styled.main`
    background: white;
    display: flex;
    justify-content: space-evenly;
    flex-flow: column;
    @media (max-width : 1100px)  {
        flex-flow: column;
    }
    @media (max-width : 800px)  {
        flex-flow: column;
    }
    align-items: center;

`

export const PubliContainer = styled.div`
    display: flex;
    flex-flow: column-reverse;
    justify-content: center;
    align-items: center;
`
export const ShareFeedComponnet = styled.div`
    background-color: whitesmoke;
    -moz-box-shadow: 0px 1px 5px 0px #676767;
    -webkit-box-shadow: 0px 1px 5px 0px #676767;
    box-shadow: 0px 1px 5px 0px #676767;
    padding: 50px;
    display: flex;
    border-radius: 10px;
    align-items: center;
    width: 580px;
    @media (max-width: 600px){
        width: 340px;
    }
    @media (max-width: 400px){
        width: 270px;
    }
`
export const InputComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 2px solid gray;
    border-radius: 100px;
    width: 430px;
    height: 50px;
    padding:20px;
    @media (max-width: 420px){
        width: 230px;
    }
    user-select:none;
    &:hover{
        cursor: pointer;
    }
    &:active{
        background-color: darkgray;
        color: white;
    }
    
`
export const FeedComponent2 = styled.div`
 padding: 50px;
    border-radius: 10px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    -moz-box-shadow: 0px 1px 5px 0px #676767;
    -webkit-box-shadow: 0px 1px 5px 0px #676767;
    box-shadow: 0px 1px 5px 0px #676767;
    justify-self: center;
    margin-bottom: 10px;
    @media (max-width: 1100px) {
        display: none;
    }
`
export const FeedComponent = styled.div`
    background: rgb(141,5,240);
    background: linear-gradient(90deg, rgba(141,5,240,1) 0%, rgba(79,0,176,1) 35%, rgba(103,0,119,1) 100%);
    padding: 50px;
    border-radius: 10px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    -moz-box-shadow: 0px 1px 5px 0px #676767;
    -webkit-box-shadow: 0px 1px 5px 0px #676767;
    box-shadow: 0px 1px 5px 0px #676767;
    justify-self: center;
    margin-bottom: 10px;
    width: 580px;
    @media (max-width: 600px) {
        width: 340px
    }
    @media (max-width: 380px) {
        width: 270px
    }
`
export const PostSchema = styled.div`
    background-color: whitesmoke;
    -moz-box-shadow: 0px 1px 5px 0px #676767;
    -webkit-box-shadow: 0px 1px 5px 0px #676767;
    box-shadow: 0px 2px 6px 1px #676767;
    padding: 50px;
    display: flex;
    flex-flow: wrap column;
    justify-content: space-between;
    word-break: break-all;
    border-radius: 10px;
    margin-bottom: 30px;
    width: 580px;
    max-width: 580px;
    min-height: 40vh;
    @media (max-width: 600px) {
        width: 340px;
        box-shadow: 0px 0px 0px 0px #676767;
        -moz-box-shadow: 0px 0px 0px 0px #676767;
        -webkit-box-shadow: 0px 0px 0px 0px #676767;
        padding: 0px;
    }
    @media (max-width: 380px){
        width: 270px;
    }
`

export const HeaderComponent = styled.header`
    top:0px;
    color: white;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    background-color: white;
    align-items: center;
    @media (max-width:600px){
        flex-flow: column wrap;
    }
`
export const FormComponent = styled.form`

    display: flex;
    flex-flow: column;
    padding: 40px;

`
export const StyleForm = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    padding: '0px',
    display: 'flex',
    flexDirection: 'column'
};
export const DivBord = styled.form`
    background-color: white;
    box-shadow: 0px 1px 5px 0px #676767;
    -moz-box-shadow: 0px 1px 5px 0px #676767;
    -webkit-box-shadow: 0px 1px 5px 0px #676767;
    display:flex;
    flex-flow: column;
    align-items: center;
    border-radius: 10px;
    padding: 30px;
    

`
export const TextLogin = styled.p`
    margin-bottom: 15px;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;

`
export const TextoLink = styled.p`
    color: #0096FF;
    text-decoration: underline;
    text-align: start;
    margin-top: 10px;

`
export const ModalHeader = styled.div`
    color: white;
    display:flex;
    flex-flow: column;
    width: 30%;
    padding: 30px;
    position: fixed;
    top: 0;
    margin-right: -2.5em;
    left: 71%;
    z-index: 10000;
    height: 100vh;
    background-color: #26006e;
    @media (max-width: 700px) {
        width:50%;
        left: 51%;
    }
    @media (max-width: 600px) {
        width:100%;
        left: 0%;
    }
    `

export const HeaderPerfil = styled.div`
    display: flex;
    margin: 3px;
    align-items: center;
    background-color: #5800FF;
    padding: 10px;
    color: white;
    &:hover{
        cursor: pointer;
        user-select:none;
    }
`
export const sectionHeader = styled.section`
    box-shadow: 0px 1px 5px 0px #676767;
    display:flex;
    flex-flow: column;
`
export const SectionContainer = styled.main`
    display:flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`

export const PerfilComponent = styled.div`
    box-shadow: 0px 1px 5px 0px #676767;
    display:flex;
    flex-flow: column wrap;
    padding: 40px;
    border-radius: 10px;
    margin-top: 30px;

`
export const DivContainer = styled.div`
    display:flex;
    flex-flow: column wrap;
    align-items: center;
`
export const PostImage = styled.img`
    max-height: 300px;
    max-width: 474px;
    height: auto;
    width: auto;
    align-self: center;
    text-align: center;
    @media (max-width: 600px) {
        max-width: 340px;
    }
    @media (max-width: 400px) {
        max-width: 270px;
    }
`
export const AvatarPostImage = styled.img`
    width: 50px;
    height: 50px;
    max-width: 50px;
    max-height: 50px;
    border-radius: 50%;
`
export const AvatarImage = styled.img`
    width: 80px;
    height: 80px;
    max-height: 80px;
    max-width: 80px;
    border-radius: 50%;
`
export const TextColor = styled.h2`
    background-image: linear-gradient(90deg, rgba(141,5,240,1) 0%, rgba(79,0,176,1) 35%, rgba(103,0,119,1) 100%);
    font-weight: bold;
    font-size:  24px;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
`
export const ContainerDivAutor = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
`