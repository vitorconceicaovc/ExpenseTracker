import styled from "styled-components"

export const Container = styled.div`
    height: 150px;
    text-align: center;
    background: teal;
    
`;

export const Header = styled.h1`
`;


export const Title = styled.div`
    padding-top: 20px;
    color: #fff;
`;

export const Github = styled.a`
    text-decoration: none;  
    position: absolute;
    right: 10px;
    top: 10px;
    border: 2px solid lightgray;
    border-radius: 4px;
    padding: 2px 10px;
    font-size: 20px;
    transition: all .4s ease;

    :hover {
        
        border: 2px solid transparent;
    }

    



`;