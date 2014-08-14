'use strict';

angular.module('<%= preffix %>.<%= moduleName %>')
  .filter('<%= name %>', function() {
    return function(text) {
      return text.replace(/\s/g, '');
    }
  });

