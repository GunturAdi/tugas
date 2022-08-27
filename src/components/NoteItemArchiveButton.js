import React from 'react';

function NoteItemArchiveButton({ id, onArchieve, buttonName }) {
  return (
    <button className="note-item__archive-button" onClick={() => onArchieve(id)}>
      {buttonName}
    </button>
  );
}

export default NoteItemArchiveButton;
