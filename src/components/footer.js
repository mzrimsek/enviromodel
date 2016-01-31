import React, {Component} from 'react';

export default class Footer extends Component{

  render(){
    return (
      <div className="footer">
        <div className="container">
          <p className="text-muted right">All scores out of 10 points</p>
        </div>
      </div>
    );
  }
}
