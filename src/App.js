import React, { useState, useEffect } from "react";
import NoteLists from "./NoteLists";
import { nanoid } from 'nanoid';
import Search from './Search';
import Header from "./Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is first note",
      date: "01/04/2001",
    },
    {
      id: nanoid(),
      text: "this is first note",
      date: "01/04/2001",
    },
    {
      id: nanoid(),
      text: "this is first note",
      date: "01/04/2001",
    },
  ]);


  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);



  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id:nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];

    setNotes(newNotes);
  };


  const deleteNote = (id) => {
  const newNotes =  notes.filter((note)=> note.id !== id);
  setNotes(newNotes);
  }

  const [searchText, setSearchText] = useState('');

  return (
    <div>
      <Header />
      	<Search handleSearchNote={setSearchText} />
      <NoteLists 
       notes={notes.filter((note) =>
        note.text.toLowerCase().includes(searchText)
      )}
       handleAddNote={addNote}
       handleDeleteNote ={deleteNote}
       />
   
    </div>
    
  );
};

export default App;
