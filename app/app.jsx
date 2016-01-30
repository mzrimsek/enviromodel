import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
  render() {
    return (React.createElement('div', {className:'app'}, 'test'));
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
