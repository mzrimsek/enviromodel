import React, {Component} from 'react';
import { Link } from 'react-router';

const CATEGORIES = ['designer', 'bridge', 'better', 'contemporary','moderate', 'budget'];

export default class CategoryLinks extends Component{

  render(){
    return (
      <div className="category-links container">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6">
            {CATEGORIES.map((category, idx) =>
              <Link key={category} to={`/${category}`}>
                <img className="img-responsive" src={`public/img/categories/${category}.png`} />
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
}
