'use strict';

describe('Factory: <%= name %>', function() {
  var <%= name %>;

  beforeEach(module('<%= preffix %>.<%= moduleName %>'));

  beforeEach(inject(function(_<%= name %>_) {
    <%= name %> = _<%= name %>_;
  }));

  it('should do something', function() {
    expect(!!<%= name %>).toBeDefined();
  });
});

