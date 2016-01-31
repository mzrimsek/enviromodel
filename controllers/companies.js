var db = require('lowdb')('db.json');
var companies = db('companies');
var schema = require('validate');

module.exports = {

  create: function(req, res) {
    var errors = validate(req.body);
    if (errors.length) return res.json(errors);

    companies.push(req.body);
    return res.json(req.body);
  },

  list: function(req, res) {
    return res.json(companies);
  },

  findByName: function(req, res) {
    var company = companies.find({
      name: req.params.name
    });
    return res.json(company);
  },

  findByCategory: function(req, res) {
    var company = companies.find({
      category: req.params.category
    });
    return res.json(company);
  },

  delete: function(req, res) {
    companies.remove({
      name: req.params.name
    });
    return res.json({
      name: req.params.name
    });
  }

};

function validate(company) {
  var c = schema({
    name: {
      type: 'string',
      required: true,
      message: 'Name is required'
    },
    design: {
      type: 'number',
      required: true,
      message: 'Design is required'
    },
    raw_materials: {
      type: 'number',
      required: true,
      message: 'Raw Materials is required'
    },
    production: {
      type: 'number',
      required: true,
      message: 'Production is required'
    },
    distribution: {
      type: 'number',
      required: true,
      message: 'Distribution is required'
    },
    corporate_ethics: {
      type: 'number',
      required: true,
      message: 'Corporate Ethics is required'
    },
    transparency: {
      type: 'number',
      required: true,
      message: 'Transparency is required'
    },
    outreach: {
      type: 'number',
      required: true,
      message: 'Outreach is required'
    }
  });

  return c.validate(company);
}
