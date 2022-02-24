import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

  html {
    width:100%;
    height:100%;
  }

  body {
    width: 100%;
    height: 100%;
    color: #424242;
    font-family: 'Pretendard', sans-serif;
    font-weight: 300;
    /* overflow: hidden; */
    padding: 0;
    margin: 0;
    font-size: 18px;
    transition: all ease 0.7s 0s;
  }

  *, button, input, select, label {
    font-family: 'Pretendard', sans-serif;
    box-sizing: border-box;
  }

`;

export default GlobalStyle;
