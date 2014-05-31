describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    browser.get('/');

    var greeting = element(by.id('greeting'));

    expect(greeting.getText()).toEqual('Hello, Ciro!');
  });
});

