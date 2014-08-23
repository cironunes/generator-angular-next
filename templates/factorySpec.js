'use strict';

describe('Factory: <%= name %>', function() {
  var <%= name %>;

  beforeEach(module('<%= preffix %>.<%= moduleName %>'));

  beforeEach(inject(function(_<%= capitalizedName %>_) {
    <%= name %> = _<%= capitalizedName %>_;
  }));

  it('should do something', function() {
    expect(!!<%= name %>).toBeDefined();
  });
});

