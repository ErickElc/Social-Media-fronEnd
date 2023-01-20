import styled from "styled-components";

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
