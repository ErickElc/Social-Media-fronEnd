import styled from "styled-components";

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
    max-width: 880px;
    width: 100%;
`;

export const AvatarImage = styled.img`
    width: 80px;
    height: 80px;
    max-height: 80px;
    max-width: 80px;
    border-radius: 50%;
`;
