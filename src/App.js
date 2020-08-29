import React,{useState} from 'react';
import Header from "./Components/Header";
import SideNavBar from "./Components/SideNavBar";
import Description from "./Components/Description";
import Note from "./Components/Note";
import './App.css';

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  return (
    <div className="App">
    <SideNavBar />
      <Header />
      <Description onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}
    </div>
  );
}

export default App;
