import { createGlobalStyle } from "styled-components"


export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #f5f5f5;
        font-size: 14px;
        font-family: sans-serif;
        color: #000;
    }

    .info {
        font-size: 1.3em;
        margin-top: 15px;
    }
    .info-container {
        display: flex;
        flex-direction: column;
    }
`