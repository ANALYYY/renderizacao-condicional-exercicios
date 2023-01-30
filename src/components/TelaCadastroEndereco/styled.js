import styled from "styled-components";

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    border-radius: 50px;
`
export const Divs = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const Button = styled.button `
    /*background-color: transparent;*/
    margin-top: 10px;
    padding: .4rem;
    border-radius: 3px;
    background-color: orangered;
    border: none;
    font-size: 1rem;

    :hover {
        color: white;
    }    
`

export const Input = styled.input `
    border-radius: 3px;
    border-color: orangered;
    height: 30px;
    display: flex;
    box-shadow: 0 0 0 0;
    outline: 0;

    :hover{
        cursor: pointer;
    }
`