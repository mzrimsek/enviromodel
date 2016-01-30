import React, {PropTypes} from 'react';

const CompanyTile = React.createClass({
  render() {
    var totalClass = "companyTile" + this.props.name;
    return (
      <div className=totalClass>
        <a href={this.props.name}></a>
      </div>
    );
  }
});

export default CompanyTile;
