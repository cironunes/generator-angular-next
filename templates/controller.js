'use strict';

angular.module('<%= preffix %>.<%= moduleName %>')
  .controller('<%= capitalizedName %>Ctrl', function() {
    this.items = [1, 2, 3];
  });
