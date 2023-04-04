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
    list-style: none;
  }
  

  main {
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => {
			switch (props.bgcolor) {
				case "diet":
					return "#e60c2d";
				case "zero":
					return "#1f1e1f";
				default:
					return "#0261bf";
			}
		}};
    transition: all 0.6s;
    z-index: -1;
    color:  #ffffff;
  }
  
  img {
    display: block;
    max-width: 100%;
  }

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`;
