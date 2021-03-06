import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --darkest-shade: #000e14;
    --lightest-shade: #ffffff;
    --mid-shade: #5e8283;
    --background-colour: #224054;
    --highlight-colour: #9ec385;
    --highlight-colour-dark: #425f2e;
  }

  * {
    margin: 0;
    padding: 0;
  }

  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  /* 1200px / 16px = 75em */
  @media (max-width: 75em) {
    html {
      font-size: 55%;
    }
  }

  /* 768px / 16px = 48em */
  @media (max-width: 48em) {
    html {
      font-size: 50%;
    }
  }

  /* 360px / 16px = 22.5em */
  @media (max-width: 22.5em) {
    html {
      font-size: 44%;
    }
  }

  body {
    background-color: var(--lightest-shade);
    font-family: "Lato", sans-serif;
    font-size: 1.6em;
    line-height: 1.5;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  p:not(:last-of-type) {
    margin-bottom: 10px;
  }

  table {
    margin-bottom: 15px;
  }

  td {
    border: 1px var(--background-colour) solid;
    padding-bottom: 10px;
  }

  .app-container {
    display: flex;
  }

  @media (max-width: 48em) {
    .app-container {
      flex-direction: column;
    }
  }
`;

export default GlobalStyle;
