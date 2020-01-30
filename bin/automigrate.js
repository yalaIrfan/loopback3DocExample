var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.pdb;

ds.automigrate('CoffeeShop', function (err) {
    if (err) throw err;

    var coffeeShops = [{
        name: 'Bel Cafe',
        city: 'Vancouver'
    }, {
        name: 'Three Bees Coffee House',
        city: 'San Mateo'
    }, {
        name: 'Caffe Artigiano',
        city: 'Vancouver'
    }];
    var count = coffeeShops.length;
    coffeeShops.forEach(function (coffe) {
        app.models.CoffeeShop.create(coffe, function (err, model) {
            if (err) throw err;

            console.log('Created:', model);

            count--;
            if (count === 0)
                ds.disconnect();
        });
    });
});