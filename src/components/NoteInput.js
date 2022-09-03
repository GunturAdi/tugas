import React from 'react';
import { getInitialData } from '../utils';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      title: '',
      body: '',
      createdAt: new Date(),
      archived: false
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitChangeEventHandler = this.onSubmitChangeEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value
      };
    });
  }

  onSubmitChangeEventHandler(event) {
    this.setState(() => {
      event.preventDefault();
      this.props.addNote(this.state);
    });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitChangeEventHandler}>
          <p className="note-input__title__char-limit">Sisa karakter: {50 - this.state.title.length}</p>
          <input
            className="note-input__title"
            type="text"
            placeholder="ini adalah judul..."
            required
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Tuliskan Catatan mu disini..."
            required
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          />
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
