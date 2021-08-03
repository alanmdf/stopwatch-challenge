import React, { Component } from 'react';
import icons from './Icons/LibraryIcons';

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        👻 GhostDevs Trybe Stopwatch 👻
        {icons.setigins}
      </header>
    );
  }
}

export default Header;
