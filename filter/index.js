'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var ScriptBase = require('../script-base.js');
var nextUtils = require('../util.js');

var FilterGenerator = module.exports = function(args, options) {
  ScriptBase.apply(this, arguments);

  this.moduleName = args[0];
  this.name = args[1];
  this.capitalizedName = nextUtils.capitalize(this.name);
};

util.inherits(FilterGenerator, ScriptBase);

FilterGenerator.prototype.createSourceFile = function() {
  this.sourceRoot(path.join(__dirname, '../templates'));
  yeoman.generators.Base.prototype.template.apply(this, [
    'filter.js',
    'app/' + this.moduleName + '/' + this.name + 'Filter.js'
  ]);
};

FilterGenerator.prototype.createTestFile = function() {
  this.sourceRoot(path.join(__dirname, '../templates'));
  yeoman.generators.Base.prototype.template.apply(this, [
    'filterSpec.js',
    'test/unit/' + this.moduleName + '/' + this.name + 'FilterSpec.js'
  ]);
};


