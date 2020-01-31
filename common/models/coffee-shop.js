'use strict';

module.exports = function (CoffeeShop) {


  CoffeeShop.status = (cb) => {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var OPEN_HOUR = 7;
    var CLOSE_HOUR = 21;
    console.log('Current hour is %d', currentHour);
    let response;
    if (currentHour > OPEN_HOUR || currentHour < CLOSE_HOUR)
      response = 'We are open for business.';
    else
      response = 'Sorry, we are closed. Open daily from 7am to 9pm.';
    cb(null, response);
  };

  CoffeeShop.remoteMethod(
    'status', {
    http: {
      path: '/status',
      verb: 'get'
    },
    returns: {
      arg: 'status',
      type: 'string'
    }
  });


  // Executing create, retrieve, update, and delete methods in a remote method
  CoffeeShop.getName = (shopId, cb) => {
    CoffeeShop.findById(shopId, (err, result) => {

      let response = `Name of the shop is ` + result.name;
      cb(null, response);
    })
  }

  //construct the response for the getName req
  CoffeeShop.remoteMethod(
    'getName',
    {
      http: {
        path: '/getName',
        verb: 'get'
      },
      accepts: {
        arg: 'id',
        type: 'number',
        required: true,
        http: {
          source: 'query'
        }
      },
      returns: {
        arg: 'name',
        type: 'string'
      }
    }
  )
};