import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *{
  box-sizing: border-box;
  }
  body {
    margin: 0;
    color: ${({ theme }) => theme.mainTextColor} ;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.mainBackgroundColor} ;
  }
`;

export const darkTheme = {
  mainBackgroundColor : "#2c3338",
  asideBackgroundColor : "#1d2327",
  mainTextColor : "white",
  colorLogo : "white",
};
export const lightTheme = {
  mainBackgroundColor : "#d9b99b",
  asideBackgroundColor : "#AD8E70",
  mainTextColor : "white",
  colorLogo : "black",
};
