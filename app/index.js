'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

var AngularNextGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous AngularNext generator!'));

    var prompts = [];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));

  },

  app: function () {
    this.mkdir('app');

    this.copy('index.html', 'app/index.html');

    this.copy('modules/app.js', 'app/app.js');
    this.copy('modules/greetModule.js', 'app/greet/greetModule.js');
    this.copy('modules/greetDirective.js', 'app/greet/greetDirective.js');
    this.copy('modules/greetSpec.js', 'test/unit/greet/greetDirectiveSpec.js');

    this.copy('modules/homeSpec.js', 'test/e2e/homeSpec.js');

    this.copy('protractor.conf.js', 'protractor.conf.js');
    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('_.bowerrc', '.bowerrc');
    this.copy('karma.conf.js', 'karma.conf.js');
    this.copy('gulpfile.js', 'gulpfile.js');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = AngularNextGenerator;
