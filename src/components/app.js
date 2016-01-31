import React, {Component} from 'react';
import { RouteHandler } from 'react-router';
import Header from 'components/header';

export default class App extends Component{
  render(){
    return (
      <div className="app">
        <Header></Header>
        <RouteHandler></RouteHandler>
      </div>

    );
  }
}
