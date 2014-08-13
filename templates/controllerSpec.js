'use strict';


describe('Controller: <%= name %>', function() {
  var ctrl, scope;

  beforeEach(module('<%= preffix %>.<%= moduleName %>'));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();

    ctrl = $controller('<%- name %>', {
      $scope: scope
    });
  }));

  it('should have some items', function() {
    expect(ctrl.items.length).toBe(3);
  });
});
