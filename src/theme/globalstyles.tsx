import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: #111;
    background-color:#FAF9F6;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  main{
    padding: 5rem;
    margin-top: 15rem
    display:flex;
    flex-direction:column;
    align-items:center;
    min-height:100vh;
    justify-content:center;
  }
  footer{
    padding: 5rem;
    text-align:center;
    font-weight:600;
    font-size:1.5rem;
    margin:0;
    display:block;
    background-color: #FF5733;
    color: #ffffff;
    border-top: 10px solid #333;
    position:relative;
    bottom:0px;
    width:100%;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 15px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 15px;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
