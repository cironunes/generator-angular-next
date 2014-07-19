'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var Generator = module.exports = function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  try {
    this.appName = require(path.join(process.cwd(), 'bower.json')).name;
  } catch (e) {
    this.appName = path.basename(process.cwd());
  }
  this.appName = this._.camelize(this._.slugify(this._.humanize(this.appName)));

  this.preffix = require(path.join(process.cwd(), 'bower.json')).options.preffix;
};

util.inherits(Generator, yeoman.generators.NamedBase);

