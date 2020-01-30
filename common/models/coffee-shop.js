'use strict';

module.exports = function(CoffeeShop) {
    CoffeeShop.observe('before save', function (ctx, next) {
      var now = new Date();
      if (ctx.isNewInstance) {
        ctx.instance.createdAt = now;
        ctx.instance.lastModifiedAt = now;
      } else {
        ctx.data.lastModifiedAt = new Date();
      }
  
      next();
    });
  };