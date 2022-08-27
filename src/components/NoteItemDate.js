import React from 'react';

function NoteItemDate({ createdAt }) {
  return <p className="note-item__date">{createdAt}</p>;
}

export default NoteItemDate;
