import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from "react-router-dom";
import { VscAdd } from "react-icons/vsc";
import { BsFillTrashFill, BsFillBrightnessHighFill } from "react-icons/bs";

import LinkToNote from './LinkToNote';
import Note from './Note';

import { NoteList } from './NoteList/NoteList.styled';
import { Side, TitleList, GroupeTitleSide, Main, AddNotes, MessageNoteNotSelect, TrashNote, NameProfile, ChangeTheme } from './App.styled';
import { darkTheme, GlobalStyle, lightTheme } from './GlobalStyle';
import { Loader } from './Note/Note.styled';

function App() { 
  const [id, setId] = useState();
  const [notes, setNotes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState("");
  const [theme, setTheme] = useState("light");
  
  const fetchNotes = async () => {
    const response = await fetch ("/notes");
    const notes = await response.json();
    setIsLoading(false);
    setNotes(notes);
  }

  //afficher profile
  const putProfile = async () => {
    const response = await fetch(`/profile`);
    const data = await response.json();
    setProfile(data.name);
  };
  
  //create note 
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
  };

  //bouton mode light/dark
  const toggleTheme = () => {
    if (theme === 'lightTheme') {
      setTheme('darkTheme');
    } else {
      setTheme('lightTheme');
    }
  };
  // delete une note
  const removeNote = async () => {
    console.log(id);
    fetch(`/notes/${id}`, { 
      method : "DELETE",})
      .then (() => {
        setNotes(notes.filter((notes) => notes.id !== parseInt(id)));
        
      });
  };

  // updates une note
  const updateNotes = async (notesToUpdate) => {
    setNotes(notes.map((notes) => 
    notes.id === notesToUpdate.id ? notesToUpdate : notes));
  }
  useEffect(() => {
    fetchNotes();
    putProfile(); 
  }, []);

  return (
    <>
    
    <ThemeProvider theme={theme==="light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      
      <Side>
        <NameProfile>Bonjour {profile} !</NameProfile>
        {isLoading && (
          <Loader/>
        )}
        <GroupeTitleSide>
          <AddNotes path='/' onClick={createNote}><VscAdd /></AddNotes>
          <TitleList>Liste des notes :</TitleList>
        </GroupeTitleSide>
      {notes ? (
          <NoteList>
            {notes.map((note) => (
              <li key={note.id} onClick={()=> setId(note.id)}>
                <LinkToNote id={note.id} title={note.title} />
              </li>
            ))}
          </NoteList>
        ) : isLoading
        ? <Loader/>
        : "Aucune note..."
        } 
        <ChangeTheme onClick={toggleTheme}><BsFillBrightnessHighFill/></ChangeTheme>
      </Side>
      <Main>
        <TrashNote onClick={() => 
          {removeNote(id)}}><BsFillTrashFill/>
        </TrashNote>
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
