import styled from 'styled-components';

const SIDE_WIDTH = 300;

export const Side = styled.aside`
  color: ${({ theme }) => theme.mainTextColor};
  position: fixed;
  width: ${SIDE_WIDTH}px;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.asideBackgroundColor} ;
`;

export const GroupeTitleSide = styled.div`
    display: flex;
    flex-direction: row-reverse;
    padding: 20px;
`;

export const TitleList = styled.title`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;

`;
export const Main = styled.main`
  color: ${({ theme }) => theme.mainTextColor};
  height: 100vh;
  margin-inline-start: 310px;
`;

export const AddNotes = styled.button `
  padding: 10px;
  display: flex;
  align-items: flex-end;
  margin: auto;
  border-radius: 5px;
  background-color: #2c3338;
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

export const LoaderWrapper = styled.div`
  height: 60px;
`;

export const TrashNote = styled.button`
  padding: 10px;
  margin: 5px;
  display: flex;
  align-items: flex-end;
  margin: auto;
  border-radius: 5px;
  background-color: #2c3338;
  color: white;
`;