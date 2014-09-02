'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var nextUtils = require('../util.js');

var AngularNextGenerator = module.exports = function (args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.argument('appName', {type: String, required: false});
  this.appName = this.name = this.appName || path.basename(process.cwd());
  this.capitalizedName = nextUtils.capitalize(this.name);
  this.appName = this._.camelize(this._.slugify(this._.humanize(this.appName)));

  this.pkg = require('../package.json');

  // Have Yeoman greet the user.
  this.log(yosay('Welcome to the marvelous AngularNext generator!'));

  this.on('end', function () {
    if (!this.options['skip-install']) {
      this.installDependencies();
    }
  });
};

util.inherits(AngularNextGenerator, yeoman.generators.Base);

AngularNextGenerator.prototype.askFor = function() {
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
};

AngularNextGenerator.prototype.createConfigFiles = function() {
  this.invoke('angular-next:common');
  this.sourceRoot(path.join(__dirname, '../templates'));

  ['package.json', 'gulpfile.js', 'bower.json'].forEach(function(file, index) {
    this.copy(this.type + '/root/_' + file, file);
  }.bind(this));
};

AngularNextGenerator.prototype.createAppFiles = function() {
  this.sourceRoot(path.join(__dirname, '../templates'));

  this.mkdir('app');

  this.copy(this.type + '/index.html', 'app/index.html');

  // js files
  if (this.type === 'app') this.name = 'greet';
  this.copy(this.type + '/modules/app.js', 'app/app.js');
  this.copy(this.type + '/modules/greetModule.js', 'app/' + this.name + '/' + this.name + 'Module.js');
  this.copy(this.type + '/modules/greetDirective.js', 'app/' + this.name + '/' + this.name + 'Directive.js');
  this.copy(this.type + '/modules/greetSpec.js', 'test/unit/' + this.name + '/' + this.name + 'DirectiveSpec.js');

  // e2e
  this.copy(this.type + '/modules/homeSpec.js', 'test/e2e/homeSpec.js');
};

