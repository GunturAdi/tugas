import React from 'react';
import NoteItemAction from './NoteItemAction';
import NoteItemContent from './NoteItemContent';

function NoteItem({ title, body, createdAt, id, onDelete, onArchieve, date, buttonName, onMove }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} createdAt={date(createdAt)} body={body} />
      <NoteItemAction id={id} onDelete={onDelete} onArchieve={onArchieve} buttonName={buttonName} onMove={onMove} />
    </div>
  );
}

export default NoteItem;
