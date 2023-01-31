import styled from "styled-components";

export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1em;
`;  

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;  

export const MutedLink = styled.a`
    font-size: 11px;
    color: rgba(200,200,200,0.8);
    font-weight: 500;
    text-decoration: none;
`;

export const BoldLink = styled.a`
    font-size: 11px;
    color: rgb(232,249,75);
    font-weight: 500;
    text-decoration: none;
`;

export const Input = styled.input`
    outline: none;
    height: 42px;
    width: 100%;
    border-radius: 5px;
    border: 2px solid rgba(200,200,200,0.8);
    padding: 0px 10px;
    transition: all, 200ms ease-in-out;
    font-size: 12px;

    &::placeholder {
        color: rgba(200,200,200, 0.8);
    }

    &:focus {
        outline: none;
        border: 2px solid rgb(232,249,75);
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 11px 40%;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: rgb(232,249,75);
    background: linear-gradient(90deg, rgba(232,249,75,1) 0%, rgba(190,255,122,1) 100%);

    &:hover {
        filter: brightness(1.03);
    }
`;