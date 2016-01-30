import React, {PropTypes} from 'react';

const Header = React.createClass({
  render() {
    return (
      <header className="header non-sticky-nav">
        <div id="navbar-bg" class="navbar"></div>
        <div id="navbar">
          <div class="fluid-container">
            <img class="logo" src={this.props.logo}></img>
            <span class="title">{this.props.title}</span>
          </div>
        </div>
      </header>
    );
  }
});

export default Header;
