import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Router, {Route, DefaultRoute} from 'react-router';

import App from 'components/app';
import CategoryPage from 'components/category-page';
import CategoryLinks from 'components/category-links';

const routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={CategoryLinks} />
    <Route path="/:category" handler={CategoryPage} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, (Handler) => {
  ReactDOM.render(<Handler/>, document.getElementById('root'));
});
