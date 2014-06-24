'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

var AngularNextGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.argument('appName', {type: String, required: false});
    this.appName = this.appName || path.basename(process.cwd());
    this.appName = this._.camelize(this._.slugify(this._.humanize(this.appName)));

    this.pkg = require('../package.json');

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous AngularNext generator!'));

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    var prompts = [{
      name: 'preffix',
      message: 'Would you like to choose a preffix for your modules?'
    }, {
      type: 'list',
      name: 'type',
      message: 'Which kind of structure are you looking for?',
      choices: ['module', 'app']
    }];

    this.prompt(prompts, function (props) {
      this.preffix = (props.preffix || this.appName);
      this.type = (props.type || 'module');

      done();
    }.bind(this));

  },

  createConfigFiles: function() {
    var files = [
      'protractor.conf.js',
      'package.json',
      'bower.json',
      '.bowerrc',
      'karma.conf.js',
      'gulpfile.js',
      '.editorconfig',
      '.jshintrc',
      '.gitignore'
    ];

    files.forEach(function(file, index) {
      this.copy('common/_' + file, file);
    }.bind(this));
  },

  createAppFiles: function () {
    this.mkdir('app');

    this.copy(this.type + '/index.html', 'app/index.html');

    // js files
    this.copy(this.type + '/modules/app.js', 'app/app.js');
    this.copy(this.type + '/modules/greetModule.js', 'app/greet/greetModule.js');
    this.copy(this.type + '/modules/greetDirective.js', 'app/greet/greetDirective.js');
    this.copy(this.type + '/modules/greetSpec.js', 'test/unit/greet/greetDirectiveSpec.js');

    // e2e
    this.copy(this.type + '/modules/homeSpec.js', 'test/e2e/homeSpec.js');
  },
});

module.exports = AngularNextGenerator;
