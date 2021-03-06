import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 20px 40px;
        font-family: "Open Sans", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: linear-gradient(26deg, #b4b4b4, 40%, whitesmoke 45%);
        background-repeat: no-repeat;
        background-attachment: fixed;
        min-height: 100vh;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        caret-color: transparent;

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }
    
    html {
        overflow: scroll;
    }
    
    ::-webkit-scrollbar {
        width: 0;  /* Remove scrollbar space */
        background: transparent;  /* Optional: just make scrollbar invisible */
    }
    
    ::-webkit-scrollbar-thumb {
        background: #FF0000;
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    
    
    a {
        text-decoration: none;
        color: black;
    }
    
    
    * {
        box-sizing: border-box;
    }
`

export default GlobalStyle;