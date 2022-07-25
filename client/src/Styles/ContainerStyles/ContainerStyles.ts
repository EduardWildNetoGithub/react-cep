import styled from "styled-components"


export const ContainerStyles = styled.div`
    height: 500px;
    width: 400px;

    padding-top: 15px;
    
    margin: auto;
    margin-top: 100px;

    border: 0;
    border-radius: 10px;

    background-color: #555;
    color: #000;

    display: flex;

    flex-direction: column; 
    align-items: center;

    .title {
        font-size: 26px;
        
    }
    .div-to-align-um {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
    }

`