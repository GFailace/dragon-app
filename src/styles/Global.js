import { createGlobalStyle } from "styled-components";
import { layout } from "styled-system";

const GlobalStyle = createGlobalStyle`

a {
  ${layout};

  color: #FFF;
  cursor: pointer;
  text-decoration: none;
}

body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
      font-size: 14px;
      padding: 0;
      margin: 0;
  }
  `;

export default GlobalStyle;
