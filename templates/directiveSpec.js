'use strict';

describe('Directive: <%= name %>', function() {
  var scope,
      element,
      $rootScope,
      $compile;

  beforeEach(module('<%= preffix %>.<%= moduleName %>'));

  beforeEach(inject(function(_$rootScope_, _$compile_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;

    scope = $rootScope.$new();

    element = angular.element('<div <%= preffix %>-<%= name %>></div>');
    element = $compile(element)(scope);
    scope.$digest();
  }));

  it('should say hello to the world', function() {
    expect(element[0].innerText).toBe('Hello World!');
  });
});


