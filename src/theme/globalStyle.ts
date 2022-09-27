import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    background: #121212;
  }

  button {
    cursor: pointer;
    border: none;
  }

  .carousel-indicators {
    margin: 0;
    bottom: -50px;
  }
`;
