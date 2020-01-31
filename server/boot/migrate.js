'use strict';

module.exports = async function (app) {

    let models = Object.keys(app.models)
    for (let model of models) {
        // if (model != 'User')
        await app.dataSources.pdb.autoupdate(model)
        // else
        // await app.dataSources.redis.automigrate(model)
    }


};





        // let models = Object.keys(app.models)
        // console.log(models)
        // for (let model of models) {
        //     console.log(model);
        //     // app.models.CoffeeShop.create
        //     app.dataSources.pdb.automigrate(app.models[model])
        //     // .then((res) => console.log(res)).catch((err) => console.log(err))
        // }

        // app.models.CoffeeShop.create([{
        //     name: 'Bel Cafe',
        //     city: 'Vancouver'
        // }, {
        //     name: 'Three Bees Coffee House',
        //     city: 'San Mateo'
        // }, {
        //     name: 'Caffe Artigiano',
        //     city: 'Vancouver'
        // }], function (err, coffeeShops) {
        //     if (err) throw err;

        //     console.log('Models created: \n', coffeeShops);
        // });

