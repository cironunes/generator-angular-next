'use strict';

angular.module('<%= preffix %>.<%= moduleName %>')
  .directive('<%= preffix %><%= capitalizedName %>', function() {
    return {
      template: '<p>Hello World!</p>',
      link: function($scope, $element, $attrs) {
        // linkFn
      }
    };
  });

