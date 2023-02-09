import { VscCheckAll, VscClose, VscDebugRestart } from "react-icons/vsc";
import { useParams} from "react-router-dom";

import { useState, useEffect, useCallback } from "react";
import { Form, Title, Content, Enregistrer, SaveStatus, Loader, ErrorMessage } from "./Note.styled";
import { FullHeightAndWidthCentered } from "../App.styled";

const Note = ({onModif}) => {
  // permet de recupérer l'id
  const {id} = useParams();

  const [notes, setNotes] = useState(null);
  const [iconStatus, setIcons] = useState(<VscDebugRestart />)
  const [getStatus, setGetStatus] = useState("IDLE");
  const [saveStatus, setSaveStatus] = useState("IDLE");

  // permet d'afficher les différentes notes 
  const fetchNotes = useCallback (async () => {
    setGetStatus("LOADING");
    const response = await fetch (`/notes/${id}`);
    const notes = await response.json();
    if (response.ok) {
      setNotes(notes);
      setGetStatus("IDLE");
    } else {
      setGetStatus("ERROR");
    }
  }, [id]);

  useEffect(() => {
    fetchNotes();
  }, [id, fetchNotes]);

  const saveNote = async () => {
    setSaveStatus("LOADING");
    const response = await fetch(`/notes/${notes.id}`, { 
      method : "PUT", 
      body: JSON.stringify(notes),
      headers: {
        "Content-Type" : "application/json",
      }
    });
    if (response.ok){
      onModif(notes);
      setSaveStatus("SAVED");
      setIcons(<VscCheckAll />);
    } else {
      setIcons(<VscClose />);
      setSaveStatus("ERROR");
    }
  };

  if (getStatus === "LOADING") {
    return (
      <FullHeightAndWidthCentered>
        <Loader />
      </FullHeightAndWidthCentered>
    );
  }

  if (getStatus === "ERROR") {
    return (
      <FullHeightAndWidthCentered>
        <ErrorMessage>404 : la note {id} n'existe pas.</ErrorMessage>
      </FullHeightAndWidthCentered>
    );
  }
  const submitForm = (event) => {
    event.preventDefault();
    saveNote();
  }
  return (
    <Form 
      onSubmit={submitForm}>
      <Title type="text" value={notes ? notes.title : ""} onChange={(event)=>{
        // permet de mettre à jour l'état (Title)
        setNotes({
          ...notes,
          title : event.target.value
        })
      }} />
      <Content value={notes ? notes.content : ""} onChange={(event)=>{
        // permet de mettre à jour l'état du content (textarea)
        setNotes({
          ...notes,
          content : event.target.value,
        })
      }} />
      <SaveStatus>{iconStatus}</SaveStatus>
        <Enregistrer>Enregistrer</Enregistrer>
        
    </Form>
  );
};

export default Note;