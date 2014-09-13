'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var ScriptBase = require('../script-base.js');

var ValueGenerator = module.exports = function(args, options) {
  ScriptBase.apply(this, arguments);

  this.moduleName = args[0];
  this.name = args[1];
};

util.inherits(ValueGenerator, ScriptBase);

ValueGenerator.prototype.createSourceFile = function() {
  this.sourceRoot(path.join(__dirname, '../templates'));
  yeoman.generators.Base.prototype.template.apply(this, [
    'value.js',
    'app/' + this.moduleName + '/' + this.name + 'Value.js'
  ]);
};

