import React, { PropTypes } from 'react';
import CompanyTile from './CompanyTile/companyTile.jsx';

const Index = React.createClass({
  getInitialState(){
    return { companyData: null};
  },
  componentDidMount(){
    $.ajax({
      url: '/api/companies',
      type: 'GET',
      success: (res)=>{
        this.setState({ companyData: res });
      }
    });
  },
  render () {
    var tileNodes = this.state.companyData.map((data) => {
      return (
        <CompanyTile name={data.name}></CompanyTile>
      );
    });
    return (
      <div id="wrapper">
        <div id="content">

        </div>
      </div>
    );
  }
});

export default Index;
