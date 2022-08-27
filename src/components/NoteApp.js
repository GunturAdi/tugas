import React from 'react';
import NoteAppBody from './NoteAppBody';
import NoteAppHeader from './NoteAppHeader';
import { getInitialData, showFormattedDate } from '../utils';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    // console.log(getInitialData());
    this.state = {
      notes: getInitialData(),
      date: showFormattedDate,
      archieve: [
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
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  OnDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchieveHandler(id) {
    console.log('========> onArchieve');
    const archieve = [...this.state.archieve];
    const notes = [];
    for (let i = 0; i < this.state.notes.length; i++) {
      if (id === this.state.notes[i].id) {
        archieve.push(this.state.notes[i]);
      } else {
        notes.push(this.state.notes[i]);
      }
    }
    this.setState({ archieve, notes });
  }

  onMoveHandler(id) {
    const notes = [...this.state.notes];
    const archieve = [];
    for (let i = 0; i < this.state.archieve.length; i++) {
      if (id === this.state.archieve[i]) {
        notes.push(this.state.archieve[i]);
      } else {
        archieve.push(this.state.archieve[i]);
      }
    }
  }

  onAddNoteHandler({ title, body, createdAt, archived }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt,
            archived
          }
        ]
      };
    });
  }

  render() {
    console.log(this.state.date, '===========> ini date');
    return (
      <div>
        <NoteAppHeader />
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
