import { height } from "@mui/system";
import styled from "styled-components";

export const HeaderComponent = styled.header`
    top: 0px;
    color: white;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    background-color: white;
    align-items: center;
    @media (max-width: 600px) {
        flex-flow: column wrap;
    }
`;
export const FormComponent = styled.form`
    display: flex;
    flex-flow: column;
    padding: 40px;
    @media (max-width: 600px) {
        padding: 0px;
        padding-top: 30px;
    }
`;
export const InputFile = styled.input`
    width: 90%;
`;
export const StyleForm = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    padding: "0px",
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 500px)": {
        width: "80%",
        height: "300px"
    }
};

export const ModalHeader = styled.div`
    color: white;
    display: flex;
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
        width: 50%;
        left: 51%;
    }
    @media (max-width: 600px) {
        width: 100%;
        left: 0%;
    }
`;

export const HeaderPerfil = styled.div`
    display: flex;
    margin: 3px;
    align-items: center;
    background-color: #5800ff;
    padding: 10px;
    color: white;
    &:hover {
        cursor: pointer;
        user-select: none;
    }
`;

export const TextColor = styled.h2`
    background-image: linear-gradient(
        90deg,
        rgba(141, 5, 240, 1) 0%,
        rgba(79, 0, 176, 1) 35%,
        rgba(103, 0, 119, 1) 100%
    );
    font-weight: bold;
    font-size: 24px;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
`;
