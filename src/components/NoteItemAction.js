import React from 'react';
import NoteItemArchiveButton from './NoteItemArchiveButton';
import NoteItemDeletButton from './NoteItemDeleteButton';

function NoteItemAction({ id, onDelete, onArchieve, buttonName, onMove }) {
  return (
    <div className="Note-item__action">
      <NoteItemDeletButton id={id} onDelete={onDelete} />
      <NoteItemArchiveButton id={id} onArchieve={onArchieve} buttonName={buttonName} onMove={onMove} />
    </div>
  );
}

export default NoteItemAction;
