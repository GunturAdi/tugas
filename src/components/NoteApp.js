import React from 'react';
import NoteAppBody from './NoteAppBody';
import NoteAppHeader from './NoteAppHeader';
import { getInitialData, showFormattedDate } from '../utils';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      tempNotes: getInitialData(),
      date: showFormattedDate,
      archieve: [],
      tempArchieve: [
        {
          id: 1,
          title: 'Babel',
          body: 'Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.',
          createdAt: '2022-04-14T04:27:34.572Z',
          archived: false
        }
      ]
    };

    this.OnDeleteHandler = this.OnDeleteHandler.bind(this);
    this.onArchieveHandler = this.onArchieveHandler.bind(this);
    this.onMoveHandler = this.onMoveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  OnDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    const archieve = this.state.archieve.filter((note) => note.id !== id);
    const tempNotes = this.state.tempNotes.filter((note) => note.id !== id);
    const tempArchieve = this.state.tempArchieve.filter((note) => note.id !== id);
    this.setState({ notes, archieve, tempNotes, tempArchieve });
  }

  onArchieveHandler(id) {
    const archieve = [...this.state.archieve];
    const tempArchieve = [...this.state.tempArchieve];
    const notes = [];
    const tempNotes = [];
    for (let i = 0; i < this.state.notes.length; i++) {
      if (id === this.state.notes[i].id) {
        archieve.push(this.state.notes[i]);
        tempArchieve.push(this.state.notes[i]);
      } else {
        notes.push(this.state.notes[i]);
        tempNotes.push(this.state.notes[i]);
      }
    }
    this.setState({ archieve, notes, tempArchieve, tempNotes });
  }

  onMoveHandler(id) {
    const notes = [...this.state.notes];
    const tempNotes = [...this.state.notes];
    const archieve = [];
    const tempArchieve = [];
    for (let i = 0; i < this.state.archieve.length; i++) {
      if (id === this.state.archieve[i].id) {
        notes.push(this.state.archieve[i]);
        tempNotes.push(this.state.archieve[i]);
      } else {
        archieve.push(this.state.archieve[i]);
        tempArchieve.push(this.state.archieve[i]);
      }
    }
    this.setState({ archieve, notes, tempArchieve, tempNotes });
  }

  onAddNoteHandler({ title, body, createdAt, archived }) {
    const notes = [
      ...this.state.notes,
      {
        id: +new Date(),
        title,
        body,
        createdAt,
        archived
      }
    ]

    const tempNotes = [
      ...this.state.tempNotes,
      {
        id: +new Date(),
        title,
        body,
        createdAt,
        archived
      }
    ]
    this.setState({ notes, tempNotes });
  }

  onSearchHandler(val) {
    let notes = []
    let archieve = []
    if (val) {
      const foundNote = this.state.tempNotes.filter((el) => {
        return el.title.toLowerCase().includes(val.toLowerCase())
      })
      notes = foundNote
      const foundArchived = this.state.tempArchieve.filter((el) => {
        return el.title.toLowerCase().includes(val.toLowerCase())
      })
      archieve = foundArchived
    } else {
      notes = this.state.tempNotes
      archieve = this.state.tempArchieve
    }
    this.setState({ notes, archieve });
  }

  render() {
    return (
      <div>
        <NoteAppHeader
          search={this.onSearchHandler}
        />
        <NoteAppBody
          addNote={this.onAddNoteHandler}
          notes={this.state.notes}
          date={this.state.date}
          onDelete={this.OnDeleteHandler}
          onArchieve={this.onArchieveHandler}
          archieve={this.state.archieve}
          onMove={this.onMoveHandler}
        />
      </div>
    );
  }
}

export default NoteApp;
