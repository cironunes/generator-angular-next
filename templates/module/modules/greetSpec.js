describe('Directive: <%= name %>', function() {
  var scope,
      element,
      $rootScope,
      $compile;

  beforeEach(module('<%= preffix %>.<%= name %>'));

  beforeEach(inject(function(_$rootScope_, _$compile_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;

    scope = $rootScope.$new();

    element = $compile('<<%= preffix %>-<%= name %>></<%= preffix %>-<%= name %>>')(scope);
    scope.$digest();
  }));

  it('should say hello to the user', function() {
    expect(element[0].innerText).toBe('Hello World!');
  });
});

