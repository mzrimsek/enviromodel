import React, {Component} from 'react';

export default class CompanyInfo extends Component{
  constructor(){
    super();
    this.state = {
      detailShouldRender: false
    }
    this.renderDetail = ::this.renderDetail;
    this.handleClickName = :: this.handleClickName;
  }
  static propTypes = {
    company: React.PropTypes.object.isRequired
  };
  handleClickName() {
    this.setState({detailShouldRender: !this.state.detailShouldRender});
  }
  renderDetail(){
    const {company} = this.props;
    return (
      <div className="info">
        <p>{company.company_logo}</p>
      </div>
    )
  }
  render(){
    const {detailShouldRender} = this.state;
    const {company} = this.props;
    return (
      <div key={company.name} className="company">
        <h2 onClick={this.handleClickName}>{company.name}</h2>
        {detailShouldRender &&
          this.renderDetail()}
      </div>
    );
  }
}
