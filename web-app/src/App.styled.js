import styled from 'styled-components';

const SIDE_WIDTH = 300;

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

export const GroupeTitleSide = styled.div`
    display: flex;
    flex-direction: row-reverse;
    padding: 20px;
`;

//Title de la liste
export const TitleList = styled.title`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;

`;

//conteneur Main
export const Main = styled.main`
  color: ${({ theme }) => theme.mainTextColor};
  height: 100vh;
  margin-inline-start: 310px;
`;

//button addNotes
export const AddNotes = styled.button `
  padding: 10px;
  display: flex;
  align-items: flex-end;
  margin: auto;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.mainBackgroundColor};
  border: 0;
  color: white;
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
//name profile ("Bonjour ...")
export const NameProfile = styled.p`
  font-size: 17px;
  text-decoration: underline;
  color: ${({ theme }) => theme.mainTextColor};
  display: flex;
  justify-content: center;
  padding: 20px;
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

