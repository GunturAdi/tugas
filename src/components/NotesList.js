import React from 'react';
import NoteItem from './NoteItem';

function NotesList({ notes, onDelete, onArchieve, date, buttonName, onMove }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          onDelete={onDelete}
          onArchieve={onArchieve}
          date={date}
          buttonName={buttonName}
          onMove={onMove}
          {...note}
        />
      ))}
    </div>
  );
}

export default NotesList;
