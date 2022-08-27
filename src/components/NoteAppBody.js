import React from 'react';
import NoteInput from './NoteInput';
import NotesList from './NotesList';
import NotesListEmptyMessage from './NotesListEmptyMessage';

function NoteAppBody({ notes, onDelete, onArchieve, date, addNote, archieve, onMove }) {
  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <NotesList notes={notes} onDelete={onDelete} onArchieve={onArchieve} date={date} buttonName="Arsipkan" />
      <h2>Arsip</h2>
      <NotesList notes={archieve} onDelete={onDelete} date={date} onArchieve={onMove} buttonName="Pindahkan" />
      <NotesListEmptyMessage />
    </div>
  );
}

export default NoteAppBody;
