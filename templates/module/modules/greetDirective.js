'use strict';

angular.module('<%= preffix %>.<%= name %>')
  .directive('<%= preffix %><%= capitalizedName %>', function() {
    return {
      restrict: 'E',
      template: '<h1 id="greeting">Hello World!</h1>'
    };
  });

