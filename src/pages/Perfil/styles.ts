import styled from "styled-components";

export const AvatarImage = styled.img`
    width: 80px;
    height: 80px;
    max-height: 80px;
    max-width: 80px;
    border-radius: 50%;
`;
export const FeedComponent = styled.div`
    background: rgb(141, 5, 240);
    background: linear-gradient(90deg, rgba(141, 5, 240, 1) 0%, rgba(79, 0, 176, 1) 35%, rgba(103, 0, 119, 1) 100%);
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
        width: 340px;
    }
    @media (max-width: 380px) {
        width: 270px;
    }
`;

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
    @media (max-width: 380px) {
        width: 270px;
    }
`;
export const PubliContainer = styled.div`
    display: flex;
    flex-flow: column-reverse;
    justify-content: center;
    align-items: center;
`;
export const SectionContainer = styled.main`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    padding: 40px;
    @media (max-width: 450px) {
        padding: 20px;
    }
`;
export const ContainerDivAutor = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
`;
export const AvatarPostImage = styled.img`
    width: 50px;
    height: 50px;
    max-width: 50px;
    max-height: 50px;
    border-radius: 50%;
`;
export const PostImage = styled.img`
    height: 300px;
    width: 470px;
    align-self: center;
    text-align: center;
    @media (max-width: 600px) {
        max-width: 340px;
    }
    @media (max-width: 400px) {
        max-width: 270px;
    }
`;
