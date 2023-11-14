import styled from "styled-components";

export const Container = styled.div`
    background-color: #27282F;
    color: #FFF;
    min-height: 100vh;
    padding: 30px;    
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
`;

export const ScreenWarning = styled.div`
    text-align: center;

    .emoji {
        font-size: 50px;
        margin-bottom: 20px;
    }
`;

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    @media (max-width: 520px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;

export const UploadForm = styled.form`
    background-color: #3D3F43;
    padding: 15px;
    border-radius: 10px;  
    margin-bottom: 30px; 
    text-align: center;    
    
    @media (max-width: 520px) {
        padding-top: 31px;
    }

    input[type=file] {
        display: none
    }

    label {
        background-color: #3D3F43;
        padding: 5px 10px;
        margin-left: 20px;
        width: 100px;
        border: 2px dotted #fff;
        text-transform: uppercase;
        cursor: pointer;
        border-radius: 15px; 

        &:hover {           
            background-color: #27282F;
        }

        @media (max-width: 520px) {            
            margin: 10px 10px;
        }
    }
  
    input[type=submit] {
        background-color: #756DF4;
        border: 0;
        color: #FFF;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 0 50px;
        cursor: pointer;

        &:hover {
            opacity: .9;
        }

        @media (max-width: 475px) {
            margin-top: 30px
        }
    }    
`;