'use strict';

angular.module('<%= preffix %>.greet')
  .directive('greet', function() {
    return {
      restrict: 'E',
      scope: {
        who: '@'
      },
      template: '<h1 id="greeting">Hello, {{ who }}!</h1>'
    };
  });

