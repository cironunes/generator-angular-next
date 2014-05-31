describe('Directive: Greet', function() {
  var scope,
      element,
      $rootScope,
      $compile;

  beforeEach(module('myApp.greet'));

  beforeEach(inject(function(_$rootScope_, _$compile_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;

    scope = $rootScope.$new();
    scope.user = { name: 'Ciro' };

    element = $compile('<greet who="{{user.name}}"></greet>')(scope);
    scope.$digest();
  }));

  it('should say hello to the user', function() {
    expect(element[0].innerText).toBe('Hello, Ciro!');
  });
});

