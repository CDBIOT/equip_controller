
import styled, { createGlobalStyle } from 'styled-components';

const global = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body{
    align-itens:center;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    background: #fff;
    width: 100%
    
}
body p{
    font-size: 0.8em;
}

`
export default global;