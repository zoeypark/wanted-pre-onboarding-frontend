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
    font-size:var(--main-font);
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
    color : var(--font-color);
 }
#root {
   width:100%;
   min-height: 100vh;
   max-width:50rem;
   background-color: var(--white-color);
}
input {
   width:100%;
   border-radius:5px;
   border:1px solid var(--border-color);
   padding: 1.5rem;
   height: 4.5rem;
}
input:focus,textarea:focus {
   outline:none;
   border:1px solid var(--point-color);
}
label {
   font-size: 1.4rem;
   color:var(--sub-font-color);
   margin-bottom: .5rem;
   display: block;
}
textarea{
   width:100%;
   border-radius: 5px;
   border:1px solid var(--border-color);
   height: 10rem;
   padding: 1.5rem;
   resize: none;
}
`;
 
export default GlobalStyles;