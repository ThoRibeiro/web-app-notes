import styled from "styled-components";
import { VscDebugRestart } from "react-icons/vsc";

const INPUT_PADDING = 15;
const COLOR_BUTTON = 'white';

export const Form = styled.form `
    height: 100%;
    display: flex;
    flex-direction:column;
    align-items: stretch;
`;
export const Title = styled.input`
    height: 40px;
    padding: ${INPUT_PADDING}px;
    font-size: 25px;
    width: 98%;
    color: inherit;
    border: none;
    margin-top: 20px;
    background: transparent;
    outline: none;
`;
export const Content = styled.textarea `
    padding: ${INPUT_PADDING}px;
    color: inherit;
    flex: 1;
    background: transparent;
    border: none;
    width: 98%;
    font-size: 17px;
    outline: none;
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const Enregistrer = styled.button `
    padding: 10px;
    display: flex;
    justify-content: center;
    margin: auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 20%;
    font-weight: bold; 
    border-radius: 10px;
    border: 0;
    background-color:${({ theme }) => theme.asideBackgroundColor};;
    color: ${COLOR_BUTTON};
`;

export const SaveStatus = styled.div`
    height: 30px;
    display: flex;
    justify-content: center;
    margin: auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    font-size: 25px;
`;

export const Loader = styled(VscDebugRestart)`
  width: 10%;
  height: 100%;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  -webkit-animation: icon-spin 2s infinite linear;
  animation: icon-spin 2s infinite linear;
  @-webkit-keyframes icon-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(-359deg);
      transform: rotate(-359deg);
    }
  }
  @keyframes icon-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(-359deg);
      transform: rotate(-359deg);
    }
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  display: flex;
  justify-content: center;
  margin: 0;
  align-items: center;
`;
