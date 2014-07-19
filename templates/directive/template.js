'use strict';

angular.module('<%= preffix%>.<%= name %>')
  .directive('<%= %>', function() {
    return {
      link: function($scope, $element, $attrs) {
        $element.innerText = 'Hello world!';
      }
    };
  });
