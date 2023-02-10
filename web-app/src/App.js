import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from "react-router-dom";
import { VscAdd } from "react-icons/vsc";
import { BsFillTrashFill, BsFillBrightnessHighFill, BsMoonStars } from "react-icons/bs";

import LinkToNote from './LinkToNote';
import Note from './Note';

import { NoteList } from './NoteList/NoteList.styled';
import { Side, GroupeTitleSide, Main, AddNotes, MessageNoteNotSelect, 
  TrashNote, NameProfile, ChangeTheme, NumberListe, TopSide } from './App.styled';

import { darkTheme, GlobalStyle, lightTheme } from './GlobalStyle';
import { Loader } from './Note/Note.styled';

function App() { 

  //const
  const [id, setId] = useState();
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState("");
  const [theme, setTheme] = useState("darkTheme");
  const [numberPage, setNumberPage] = useState(1);
  
  const fetchNotes = async () => {
    setNumberPage(numberPage+1);
    const response = await fetch (`/notes?_page=${numberPage}&_limit=9`);
    const _note = await response.json();
    setIsLoading(false);
    setNotes(notes.concat(_note));
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
    if (theme === 'darkTheme') {
      setTheme('lightTheme');
    } else {
      setTheme('darkTheme');
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
    <ThemeProvider theme={theme==="lightTheme" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Side>
        {/* Changement de logo the */}
        <ChangeTheme onClick={toggleTheme}>{theme==="darkTheme" ? <BsMoonStars/> :  <BsFillBrightnessHighFill/>}</ChangeTheme>
        <TopSide>
          <AddNotes path='/' onClick={createNote}><VscAdd /></AddNotes>
          <NameProfile>Bonjour {profile} !</NameProfile>
        </TopSide>
        {isLoading && (
          <Loader/>
        )}
        <GroupeTitleSide>
          {/* Permet de créer une note */}
          
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
        {/* Permet d'afficher plusieurs pages en concat */}
        <NumberListe onClick={fetchNotes}>Charger Plus</NumberListe>
      </Side>
      <Main>
        {/* Permet de trash la note */}
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
