import React, {Component} from 'react';
import { Link } from 'react-router';

const CATEGORIES = ['designer', 'bridge', 'better', 'contemporary','moderate', 'budget'];

export default class CategoryLinks extends Component{

  render(){
    return (
      <div className="category-links container">
        <div className="row">
          {CATEGORIES.map((category, idx) =>
            <div key={category} className="company-link col-md-6 col-lg-6 col-sm-12">
              <Link to={`/${category}`}>
                <img className="img-responsive" src={`public/img/categories/${category}.png`} />
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}
