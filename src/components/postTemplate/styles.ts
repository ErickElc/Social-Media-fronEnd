import styled from "styled-components";

export const PubliContainer = styled.div`
    display: flex;
    flex-flow: column-reverse;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
`;
export const PostSchema = styled.div`
    -moz-box-shadow: 0px 1px 5px 0px #676767;
    -webkit-box-shadow: 0px 1px 5px 0px #676767;
    box-shadow: 0px 2px 6px 1px #676767;
    padding: 40px;
    max-width: 880px;
    width: 100%;
    border-radius: 14px;
`;
export const PostTop = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
`;

export const AutorText = styled.h2`
    color: black;
    font-size: 24px;
    font-weight: 500;
    font-family: Arial, Helvetica, sans-serif;
    @media (max-width: 450px) {
        font-size: 17px;
    }
`;
export const PostImage = styled.img`
    width: 100%;
    height: 100%;
`;

export const AvatarPostImage = styled.img`
    width: 50px;
    height: 50px;
    @media (max-width: 450px) {
        width: 40px;
        height: 40px;
    }
`;

export const ContentPost = styled.p`
    text-align: justify;
    max-width: 100%;
    font-size: 26px;
    color: black;
    @media (max-width: 450px) {
        font-size: 16px;
    }
`;

export const ContainerDivAutor = styled.div``;

export const DivContainer = styled.div``;
