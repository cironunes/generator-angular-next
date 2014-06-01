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

  askForType: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous AngularNext generator!'));

    var prompts = [{
      name: 'appName',
      message: 'Which name do you like your app to have?'
    },{
      name: 'type',
      message: 'What kind of structure do you want? (element/app)'
    }];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;
      this.type = props.type || 'element';
      this.type = this.type + '/';

      done();
    }.bind(this));

  },

  createConfigFiles: function() {
    this.copy(this.type + 'root/_protractor.conf.js', 'protractor.conf.js');
    this.copy(this.type + 'root/_package.json', 'package.json');
    this.copy(this.type + 'root/_bower.json', 'bower.json');
    this.copy(this.type + 'root/_bowerrc', '.bowerrc');
    this.copy(this.type + 'root/_karma.conf.js', 'karma.conf.js');
    this.copy(this.type + 'root/_gulpfile.js', 'gulpfile.js');
    this.copy(this.type + 'root/_editorconfig', '.editorconfig');
    this.copy(this.type + 'root/_jshintrc', '.jshintrc');
  },

  createAppFiles: function () {
    this.mkdir('app');

    this.copy(this.type + 'index.html', 'app/index.html');

    // js files
    this.copy(this.type + 'modules/app.js', 'app/app.js');
    this.copy(this.type + 'modules/greetModule.js', 'app/greet/greetModule.js');
    this.copy(this.type + 'modules/greetDirective.js', 'app/greet/greetDirective.js');
    this.copy(this.type + 'modules/greetSpec.js', 'test/unit/greet/greetDirectiveSpec.js');

    // e2e
    this.copy(this.type + 'modules/homeSpec.js', 'test/e2e/homeSpec.js');
  },
});

module.exports = AngularNextGenerator;
