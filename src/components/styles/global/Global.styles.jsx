import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body {
width: 100%;
height: 100%;
font-family: 'Roboto', sans-serif;
color: #000000;
box-sizing: border-box;
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
}

button{
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
}

a,
a:visited {
text-decoration: none;
font-family: 'Roboto', sans-serif;
cursor: pointer;
}

`;
