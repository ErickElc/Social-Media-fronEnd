import styled from "styled-components";

export const MainComponent = styled.main`
    background: white;
    display: flex;
    justify-content: space-evenly;
    flex-flow: column;
    padding: 40px;
    @media (max-width: 1100px) {
        flex-flow: column;
    }
    @media (max-width: 450px) {
        padding: 20px;
    }
    align-items: center;
`;

export const ShareFeedComponent = styled.div`
    background-color: whitesmoke;
    -moz-box-shadow: 0px 1px 5px 0px #676767;
    -webkit-box-shadow: 0px 1px 5px 0px #676767;
    box-shadow: 0px 1px 5px 0px #676767;
    padding: 50px;
    display: flex;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    max-width: 880px;
    width: 100%;
`;
export const InputComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 2px solid gray;
    border-radius: 100px;
    width: 430px;
    height: 50px;
    padding: 20px;
    @media (max-width: 420px) {
        width: 230px;
    }
    user-select: none;
    &:hover {
        cursor: pointer;
    }
    &:active {
        background-color: darkgray;
        color: white;
    }
`;
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
