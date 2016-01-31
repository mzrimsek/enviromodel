import React from 'react';
import Router, {Route, DefaultRoute} from 'react-router';

import App from './components/app';
import CategoryPage from './components/category-page';
import CategoryLinks from './components/category-links';

const routes = [
  <Route handler={App} path="/">
    <DefaultRoute handler={CategoryLinks} />
    <Route path="/:category" handler={CategoryPage} />
  </Route>
];

export default routes;
