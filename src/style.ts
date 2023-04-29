import { createGlobalStyle } from 'styled-components';
import RobotoRegular from './assets/fonts/Roboto/Roboto-Regular.ttf';
import RobotoBold from './assets/fonts/Roboto/Roboto-Bold.ttf';
import { color } from './styles/colors';

export const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: 'Roboto Regular';
    src: url(${RobotoRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto Bold';
    src: url(${RobotoBold}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 *:before,
 *:after {
   -webkit-box-sizing: border-box;
   box-sizing: border-box;
 }
 
 button{
   cursor: pointer;
 }

 ul li {
   list-style: none;
   cursor: pointer;
 }

 a, a:visited {
   text-decoration: none;
   cursor: pointer;
 }
 
 input[type=text], input[type=password], input[type=email] {
   background: ${color.bgPrimary};
   //border: 1px solid ${color.inputBorderInactive};
   //border-radius: 6px;
   outline: none;
  }

  input[type=text]:focus, input[type=password]:focus, input[type=email]:focus  {
    border-color: ${color.inputBorderActive};
  }
 
 html, body {
   width: 100%;
   height: 100%;
   font-family: 'Roboto Regular', system-ui, -apple-system, sans-serif;
 }
 
 h1,h2,h3,h4,h5,h6 {
   font-family: 'Roboto Bold', system-ui, -apple-system, sans-serif;
 }
 
 #root {
   width: 100%;
   min-height: 100%;
   overflow: hidden;
   overflow-y: scroll;
   background-color: ${color.bgWrapper};
   display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
   -webkit-box-orient: vertical;
   -webkit-box-direction: normal;
   -ms-flex-direction: column;
   flex-direction: column;
 }
`;

export default GlobalStyle;
