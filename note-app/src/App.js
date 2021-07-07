import React from 'react';
import MyNotes from './pages/myNotes/myNotes';
import NoteItem from './components/note-list/item/NoteItem';

function App() {
  const notes = [
    {
      title: 'some title',
      description: 'somedesc',
      creation: new Date().toDateString(),
    },
    {
      title: 'some title',
      description: 'somedesc',
      creation: new Date().toDateString(),
    },
    {
      title: 'some title',
      description: 'somedesc',
      creation: new Date().toDateString(),
    },
  ];

  return (
    <div>
      <MyNotes noteList={notes}></MyNotes>
    </div>
  );
}

export default App;
