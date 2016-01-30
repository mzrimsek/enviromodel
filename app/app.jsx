import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery.2';
import Header from './components/header.jsx';
import Index from './components/index.jsx';

const App = React.createClass({
  render() {
    return (
      <div className="app container">
        <Header logo="img/logo.png" title="Enviromodel"></Header>
        <Index></Index>
      </div>
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
