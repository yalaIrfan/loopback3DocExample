// Copyright IBM Corp. 2016. All Rights Reserved.
// Node module: loopback-workspace
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

const loopback = require('loopback');
const boot = require('loopback-boot');
const path = require('path')
const app = module.exports = loopback();


app.start = function () {
  // start the web server
  return app.listen(function () {
    app.emit('started');
    const baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function (err) {
  if (err) throw err;

  app.use('/express-status', function (req, res) {
    res.json({ 'IamRunnig': true })
  })
  
  // app.get('*', (req, res) => {
  //   // console.log(path.join(__dirname, 'index.html'))
  //   // res.sendFile(path.join(__dirname, 'index.html'))
  //   res.sendFile('D:/Learning/loopback-tutorial/coffeeShop\client\dist\coffee-shop-front\index.html')
  // })
  
  
  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});


// 127.0.0.1:6379