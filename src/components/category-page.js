import React, {Component} from 'react';
import axios from 'axios';

import CompanyInfo from 'components/company-info';

export default class CategoryPage extends Component{
  constructor(){
    super();
    this.state = {
      companies: []
    };
  }
  componentWillMount() {
    axios.get(`/api/companies/category/${this.props.params.category}`)
      .then(({data}) => this.setState({companies: data}))
      .catch((err) => console.error(err))
  }
  render(){
    const { companies } = this.state;
    return (
      <div className="company-list">
        {companies.map((company, idx) =>
          <CompanyInfo key={company.name} company={company} />
        )}
      </div>
    );
  }
}
