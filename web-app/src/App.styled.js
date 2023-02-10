import styled from 'styled-components';

const SIDE_WIDTH = 300;

// aside de la page
export const Side = styled.aside`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.mainTextColor};
  position: fixed;
  width: ${SIDE_WIDTH}px;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.asideBackgroundColor};
  height: 100vh;

`;

// le top du side
export const TopSide = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
export const GroupeTitleSide = styled.div`
    display: flex;
    flex-direction: row-reverse;
    padding: 10px;
`;

//button addNotes
export const AddNotes = styled.button `
  margin: auto;
  border: 0;
  padding: 10px;
  border-radius: 5px;
  margin-right: 20px;
  color: white;
  background-color: ${({ theme }) => theme.mainBackgroundColor};
`;

//name profile ("Bonjour ...")
export const NameProfile = styled.p`
  color: ${({ theme }) => theme.mainTextColor};
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 20px;
  font-size: 17px;
  text-decoration: underline;
  
`;

//conteneur Main
export const Main = styled.main`
  color: ${({ theme }) => theme.mainTextColor};
  height: 100vh;
  margin-inline-start: 310px;
`;

export const MessageNoteNotSelect = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 25px;
  font-weight: bold;
  height: 100%;
`;

export const FullHeightAndWidthCentered = styled.div`
  height: 100%;
`;

//logo de loader
export const LoaderWrapper = styled.div`
  height: 60px;
  margin: auto;
`;

//button Trash
export const TrashNote = styled.button`
  padding: 10px;
  border: 0;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.asideBackgroundColor};
  color: white;
  margin: 20px;
  float: right;
`;

//button changement theme
export const ChangeTheme = styled.button`
  background-color: ${({ theme }) => theme.mainBackgroundColor};
  border: none;
  padding: 10px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colorLogo};;
  margin: 20px;
  width: 35px;
  height: 35px;
`;

export const NumberListe = styled.button `
  padding: 14px;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border: none;
  color: ${({ theme }) => theme.mainTextColor};
  background-color: ${({ theme }) => theme.mainBackgroundColor};
`;

