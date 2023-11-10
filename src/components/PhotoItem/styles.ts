import styled from "styled-components";

export const Container = styled.div`
    background-color: #3D3F43;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    max-width: 900px;
    flex-direction: column;

    img {
        width: 180px;
        height: 100px;
        border-radius: 10px;
        object-fit: cover;
        margin: 0 auto;
        margin-button: 10px;

        @media (max-width: 520px) {
            width: 220px;
            height: 180px;
            margin: 0 auto;
        }
    }

    

    button {
        background-color: #756DF4;
        border: 0;
        color: #FFF;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 15px auto 0 auto;
        cursor: pointer;

        &:hover {
            opacity: .9;
        }
    }
`;