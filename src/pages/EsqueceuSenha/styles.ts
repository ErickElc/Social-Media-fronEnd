import styled from "styled-components";


export const DivBody = styled.div`
    display:flex;
    height: 100vh;
    padding: 30px;
    @media (max-height: 600px) {
        justify-content: flex-end;
        padding-top: 200px;
    }
    justify-content: center;
    overflow-x: hidden;
    align-items: center;
`;

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
    

`;

export const TextLogin = styled.p`
    margin-bottom: 15px;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;

`;

export const TextoLink = styled.p`
    color: #0096FF;
    text-decoration: underline;
    text-align: start;
    margin-top: 10px;

`;