var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.dataSources.pdb;
ds.discoverAndBuildModels('coffeeshop', {schema: 'public'}, function(err, models) {
  if (err) throw err;

  models.Account.find(function(err, accounts) {
    if (err) return console.log(err);

    console.log(accounts);

    ds.disconnect();
  });
});