import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before,
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-decoration: none;
  }
  
  body,
  html {
    background-color: ${(props) =>
			props.bgcolor === "blue"
				? "#0261bf"
				: props.bgcolor === "diet"
				? "#e60c2d"
				: "#1f1e1f"};
    color:  #ffff;
    transition: all 0.6s;

    height: 100vh;
    width: 100%;
  }
  
  ul,
  li {
    list-style: none;
  }
  
  img {
    display: block;
    max-width: 100%;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`;
