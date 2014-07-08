'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var CommonGenerator = module.exports = function(args, options) {
  yeoman.generators.Base.apply(this, arguments);
};

util.inherits(CommonGenerator, yeoman.generators.Base);

CommonGenerator.prototype.setupEnv = function() {
  var files = [
    'protractor.conf.js',
    'bower.json',
    '.bowerrc',
    'karma.conf.js',
    '.editorconfig',
    '.jshintrc',
    '.gitignore'
  ];

  this.sourceRoot(path.join(__dirname, '../templates/common'));
  files.forEach(function(file, index) {
    this.copy('_' + file, file);
  }.bind(this));
};

