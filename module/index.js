'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var ScriptBase = require('../script-base.js');

var ModuleGenerator = module.exports = function(args, options) {
  ScriptBase.apply(this, arguments);

  this.name = args[0];
};

util.inherits(ModuleGenerator, ScriptBase);

ModuleGenerator.prototype.createSourceFile = function() {
  this.sourceRoot(path.join(__dirname, '../templates'));
  yeoman.generators.Base.prototype.template.apply(this, [
    'module.js',
    'app/' + this.name + '/' + this.name + 'Module.js'
  ]);
};

