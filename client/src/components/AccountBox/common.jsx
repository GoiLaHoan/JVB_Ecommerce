import styled from "styled-components";

export const BoxContainer = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;

export const FormContainer = styled.form`

    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
    
`;

export const MutedLink = styled.a`
    font-size: 14px;
    color: lightslategray;
    font-weight: 500;
    text-decoration: none;
    margin-top: 10px;
`;

export const BoldLink = styled.a`
    font-size: 17px;
    color: rgb(0, 171, 85);
    font-weight: 500;
    text-decoration: none;
    margin: 0 4px;
`;
export const LogErrors = styled.p`
    font-style: italic;
    color: red;
`

export const Input = styled.input`
    width: 100%;
    height: 42px;
    outline: none;
    border: 1px solid rgba(200, 200, 200, 0.3);
    padding: 0px 10px;
    border-bottom: 1.4px solid transparent;
    transition: all 200ms ease-in-out;
    font-size: 14px;
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
    &::placeholder {
        color: rgba(200, 200, 200, 1);
    }

    &:not(:last-of-type) {
        border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
    }

    &:focus {
        outline: none;
        border-bottom: 2px solid rgb(0, 171, 85);
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
    background: rgb(0, 171, 85);
    background: linear-gradient(
        58deg,
        rgb(0, 171, 85) 20%,
        rgba(243, 172, 18, 1) 100%
    );

    &:hover {
        filter: brightness(1.03);
    }
`;
