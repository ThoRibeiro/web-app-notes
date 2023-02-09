import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from "react-router-dom";
import { VscAdd } from "react-icons/vsc";

import { NoteList } from './NoteList/NoteList.styled';
import { Side, TitleList, GroupeTitleSide, Main, AddNotes, MessageNoteNotSelect } from './App.styled';
import { darkTheme, GlobalStyle } from './GlobalStyle';
import LinkToNote from './LinkToNote';
import Note from './Note';
import { Loader } from './Note/Note.styled';

function App() { 
  const [notes, setNotes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const fetchNotes = async () => {
    const response = await fetch ("/notes");
    const notes = await response.json();
    setIsLoading(false);
    setNotes(notes);
  }

  const createNote = async () => {
    const response = await fetch(`/notes/`, { 
      method : "POST", 
      body: JSON.stringify(
        {title:"Nouvelle note"}),
      headers: {
        "Content-Type" : "application/json",
      }
    })
      .then(res => res.json())
      .then(json => {
        setNotes(notes.concat([json]));
      });
    if(response.ok){
      const data = response.json().id;
      console.log(data);
      console.log("OK");
    }
  };

  const createNewNote = (event) => {
    event.preventDefault();
    createNote();
  }

  const updateNotes = async (notesToUpdate) => {
    setNotes(notes.map((notes) => 
    notes.id === notesToUpdate.id ? notesToUpdate : notes));
  }
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Side>
        {isLoading && (
          <Loader/>
        )}
        <GroupeTitleSide>
          <AddNotes path='/' onClick={createNewNote}><VscAdd /></AddNotes>
          <TitleList>Liste des notes :</TitleList>
        </GroupeTitleSide>
      {notes ? (
          <NoteList>
            {notes.map((note) => (
              <li key={note.id}>
                <LinkToNote id={note.id} title={note.title} />
              </li>
            ))}
          </NoteList>
        ) : isLoading
        ? <Loader/>
        : "Aucune note..."
        } 
      </Side>
      <Main>
        <Routes>
          <Route path='/' element={<MessageNoteNotSelect>Il faut sélectionner votre note !</MessageNoteNotSelect>}></Route>

          <Route path='/notes/:id' element={<Note onModif={updateNotes}/>}></Route>
        </Routes>
      </Main>
    </ThemeProvider>
  </>
  );
}

export default App;
