/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('angular-next generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('angular-next:app', [
        '../../app',
        '../../common'
      ]);

      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      '.jshintrc',
      '.editorconfig',
      '.gitignore',
      'protractor.conf.js',
      'package.json',
      'bower.json',
      '.bowerrc',
      'karma.conf.js',
      'gulpfile.js',
      'app/index.html',
      'app/app.js',
      'app/greet/greetModule.js',
      'app/greet/greetDirective.js',
      'test/unit/greet/greetDirectiveSpec.js',
      'test/e2e/homeSpec.js'
    ];

    helpers.mockPrompt(this.app, {
      'someOption': true
    });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});
