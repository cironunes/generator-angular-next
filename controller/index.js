'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var ScriptBase = require('../script-base.js');

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

var ControllerGenerator = module.exports = function(args, options) {
  ScriptBase.apply(this, arguments);

  this.moduleName = args[0];
  this.name = args[1];
  this.capitalizedName = capitalize(this.name);
};

util.inherits(ControllerGenerator, ScriptBase);

ControllerGenerator.prototype.createSourceFile = function() {
  this.sourceRoot(path.join(__dirname, '../templates'));
  yeoman.generators.Base.prototype.template.apply(this, [
    'controller.js',
    'app/' + this.moduleName + '/' + this.name + 'Controller.js'
  ]);
};

ControllerGenerator.prototype.createTestFile = function() {
  this.sourceRoot(path.join(__dirname, '../templates'));
  yeoman.generators.Base.prototype.template.apply(this, [
    'controllerSpec.js',
    'test/unit/' + this.moduleName + '/' + this.name + 'ControllerSpec.js'
  ]);
};


