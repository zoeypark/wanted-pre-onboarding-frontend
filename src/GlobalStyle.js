import { createGlobalStyle } from "styled-components";
 
const GlobalStyles = createGlobalStyle`
 * {
    box-sizing : border-box;
 }
 html {
    font-size : 62.5%;
 }
 body {
    margin : 0;
    font-size: 1.4rem;
    font-family: 'Noto Sans KR', sans-serif;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    background-color:#fafafa;
 }
 ul,ol {
    list-style : none;
 }
 a {
    text-decoration : none;
 }
 a, ul,ol, p, h1, h2, h3, h4, h5 {
    margin : 0;
    padding : 0;
    color : #222222;
 }
#root {
   width:100%;
   min-height: 100vh;
   max-width:50rem;
}
input {
   border-radius:5px;
   border:1px solid #D9D9D9;
   padding: 1.5rem;
}
input:focus,textarea:focus {
   outline:none;
   border:1px solid #838383;
}
label {
   font-size: 1.4rem;
   color: #777777;
   margin-bottom: .5rem;
   display: block;
}
`;
 
export default GlobalStyles;