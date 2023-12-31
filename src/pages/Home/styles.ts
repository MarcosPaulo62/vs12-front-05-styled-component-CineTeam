import { styled } from "styled-components";

export const MainHome = styled.main`
    background-image: ${(props) => props.theme.bgImage};
    background-repeat: ${(props) => props.theme.bgRepeat};
    background-size: ${(props) => props.theme.bgSize};
    min-height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 0;

    .selecao{
        background-color: ${(props) => props.theme.secondary};
        border-radius: 10px;
        width: 40%;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        color: white;
    }

    .escolha{
        display: flex;
        gap: 1rem;
    }

    .escolha img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 5px solid white;
        cursor: pointer;

        &:hover{
            box-shadow: 0px 4px 10px black;
        }

        &:nth-child(1):hover{
            border: 5px solid #EC1D24;
        }
        &:nth-child(2):hover{
            border: 5px solid #007AF1;
        }
    }

    .descricao{
        background-color: ${(props) => props.theme.secondary};
        border-radius: 10px;
        width: 80%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .8rem;
        color: white;

        h2{
            margin-bottom: .5rem;
        }
    }
`