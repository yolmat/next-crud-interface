import styled from "styled-components"

export const Main = styled.main`
    display: flex;
    flex-direction: column;

    height: 100vh;
    width: 100vw;

    align-items: center;
    justify-content: center;

    color: #666666;

    background-color: #121212;
`

export const Header = styled.header`
    min-width: 50%;
    max-width: 100%;

    text-transform: capitalize;

    h1 {
        font-weight: 700;
        margin-bottom: 0.4rem ;
        color: #3B7E4E;
    }
    
    h4{
        font-weight: 400;
        margin-bottom: 2rem ;
    }
`

export const LoginMain = styled.main`
    min-width: 50%;
    max-width: 100%;
`

export const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-transform: capitalize;

    gap: 3rem;

    button {
        width: 100%;
        padding: 1rem 15px;

        font-weight: 700;
        text-transform: uppercase;
        border: none;
        background-color: #3B7E4E;

        cursor: pointer;

        color: #d3d3d3;
    }

    a {
        font-weight: 300;
        text-align: center;
        text-decoration: underline;
        cursor: pointer;
    }
`

export const LoginLabel = styled.label`
    display: flex;
    flex-direction: column;

    color: #d3d3d3;

    font-weight: 500;

    gap: 0.5rem;

    input {
        width: 100%;
        padding: 1rem 15px;
        cursor: pointer;

        border: none;
        border-radius: 5px;
        background-color: #3B3B3B;

        color: #d3d3d3;
    }

    input::placeholder {
        font-weight: 500;
    }
`