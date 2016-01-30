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

  find: function(req, res) {
    var company = companies.find({
      name: req.params.name
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
    }
  });

  return c.validate(company);
}
