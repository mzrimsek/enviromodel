import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Header extends Component{

  render(){
    return (
      <div className=" header navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              <img className="img-responsive" src="public/img/logo.png"/>
            </Link>
            <h2>Enviromodel</h2>
          </div>
        </div>
      </div>
    );
  }
}
