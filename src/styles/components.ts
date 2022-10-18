import styled from 'styled-components';

export const DivBody = styled.div`
    display:flex;
    height: 100vh;
    overflow-y: hidden;
    overflow-x: hidden;
    justify-content: center;
    align-items: center;

`
export const MainComponent = styled.main`
    display: flex;
    justify-content: space-evenly;
    @media (max-width : 800px)  {
        flex-flow: column;
    }
    align-items: center;

`

export const PubliContainer = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`
export const ShareFeedComponnet = styled.div`
    -moz-box-shadow: 0px 1px 5px 0px #676767;
    -webkit-box-shadow: 0px 1px 5px 0px #676767;
    box-shadow: 0px 1px 5px 0px #676767;
    padding: 50px;
    display: flex;
    border-radius: 10px;
    align-items: center;
    @media (max-width: 420px){
        width: 240px;
    }
`
export const InputComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 2px solid gray;
    border-radius: 100px;
    width: 230px;
    height: 50px;
    padding:20px;
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
    @media (max-width: 800px) {
        display: none;
    }
`
export const FeedComponent = styled.div`
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
    @media (max-width: 800px) {
        width: 380px;
    }
    @media (max-width: 420px) {
        width: 240px
    }
`
export const PostSchema = styled.div`
    -moz-box-shadow: 0px 1px 5px 0px #676767;
    -webkit-box-shadow: 0px 1px 5px 0px #676767;
    box-shadow: 0px 1px 5px 0px #676767;
    padding: 50px;
    display: flex;
    flex-flow: wrap column;
    word-break: break-all;
    border-radius: 10px;
    margin-bottom: 30px;
    width: 380px;
    min-height: 40vh;
    @media (max-width: 420px){
        width: 240px;
    }
`

export const HeaderComponent = styled.header`
    /* position: fixed;
    left: 0px;
    min-width: 100%; */
    top:0px;
    color: white;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    background-color: #5800FF;
    align-items: center;
    @media (max-width: 500px){
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
    padding: 20px;
    

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
    width: 250px;
    padding: 30px;
    position: sticky;
    bottom: 0px;
    left: 82vw;
    z-index: 100;
    height: 100vh;
    background-color: #5800FF;
    `

export const HeaderPerfil = styled.div`
    display: flex;
    margin: 3px;
    align-items: center;
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
    min-height: 200px;
    width: 300px;
    align-self: center;
    text-align: center;
`
export const AvatarPostImage = styled.img`
    width: 40px;
    height: 40px;
    max-width: 40px;
    max-height: 40px;
    border-radius: 50%;
`
export const AvatarImage = styled.img`
    width: 80px;
    height: 90px;
    max-height: 90px;
    max-width: 80px;
    border-radius: 50%;
`