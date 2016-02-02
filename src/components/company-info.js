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
    let average = (company.design + company.raw_materials + company.production + company.distribution + company.corporate_ethics + company.transparency + company.outreach)/7;
    return (
      <div className="info">
        <div className="design col-md-4 col-sm-6">
          <span>Design:</span>
          <span>{company.design}</span>
        </div>
        <div className="raw_materials col-md-4 col-sm-6">
          <span>Raw Materials:</span>
          <span>{company.raw_materials}</span>
        </div>
        <div className="production col-md-4 col-sm-6">
          <span>Production:</span>
          <span>{company.production}</span>
        </div>
        <div className="distribution col-md-4 col-sm-6">
          <span>Distribution:</span>
          <span>{company.distribution}</span>
        </div>
        <div className="corporate_ethics col-md-4 col-sm-6">
          <span>Corporate Ethics:</span>
          <span>{company.corporate_ethics}</span>
        </div>
        <div className="transparency col-md-4 col-sm-6">
          <span>Transparency:</span>
          <span>{company.transparency}</span>
        </div>
        <div className="outreach col-md-12 col-sm-6">
          <span>Outreach:</span>
          <span>{company.outreach}</span>
        </div>
        <div className="rating col-md-12 col-sm-12">
          <span>Rating:</span>
          <span>{average.toFixed(1)}</span>
        </div>
      </div>
    )
  }
  render(){
    const {detailShouldRender} = this.state;
    const {company} = this.props;

    return (
      <div key={company.name} className="company container">
          <div className="row">
            <img className="img-responsive" onClick={this.handleClickName} src={`public/img/companies/${company.company_logo}`} />
            {detailShouldRender &&
              this.renderDetail()}
          </div>
      </div>
    );
  }
}
