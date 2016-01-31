import React, {Component} from 'react';
import { Link } from 'react-router'

const CATEGORIES = ['designer', 'bridge', 'better', 'contemporary','moderate', 'budget'];

export default class CategoryLinks extends Component{

  render(){
    return (
      <div className="category-links">
        {CATEGORIES.map((category, idx) =>
          <Link key={category} to={`/${category}`}>
            <img src={`/img/${category}.png`} />
          </Link>
        )}
      </div>
    );
  }
}
