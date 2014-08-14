'use strict';

describe('Filter: <%= name %>', function() {
  var filter;

  beforeEach(module('<%= preffix %>.<%= moduleName %>'));

  beforeEach(inject(function(_<%= name %>Filter_) {
    filter = _<%= name %>Filter_;
  }));

  it('should remove the whitespaces', function() {
    expect(filter('This is a test')).toBe('Thisisatest');
  });
});



