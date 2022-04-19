import React, { useState } from 'react';
import Notes from './components/Notes';
import './style.css';

export default function App() {
  let [list, setList] = useState([]);
  let [newNote, setNewNote] = useState('');

  function addNote() {
    let addedNote = list.concat(newNote);
    setNewNote('');
    setList(addedNote);
  }

  function handleChange(e) {
    setNewNote(e.target.value);
  }

  return (
    <div>
      <h1>My Notes</h1>
      <input type="text" value={newNote} onChange={handleChange} />

      <button onClick={addNote}>Save</button>
      <Notes data={list} />
    </div>
  );
}
