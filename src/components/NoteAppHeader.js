import React from 'react';

class NoteAppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tempSearch: ''
    };

    this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
  }

  onSearchChangeEventHandler(event) {
    this.props.search(event.target.value)
    this.setState({
      tempSearch: event.target.value
    });
  }

  render() {
    return (
      <header className="note-app__header">
        <h1>Notes</h1>
        <div className="note-search">
          <input
            type="text"
            placeholder="Cari Catatan..."
            value={this.state.tempSearch}
            onChange={this.onSearchChangeEventHandler}
          />
        </div>
      </header>
    );
  }
}

export default NoteAppHeader;
