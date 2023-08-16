import styled from "styled-components";


export const FormSection = styled.section`
    display: flex;
    width: 35%;
    color: #ffff;
    background-color: #235965;
    margin: auto;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    & form {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 430px;
        color: #ffff;
        background-color: #235965;
        min-height: 200px;
        border-radius: 10px;
    }
    & form > button {
        margin: 10px auto;
        width: 50%;
    }
`;