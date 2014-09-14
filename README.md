# Yeoman Generator for the AngularJS Next Generation

![https://travis-ci.org/cironunes/generator-angular-next.svg](https://travis-ci.org/cironunes/generator-angular-next.svg?branch=master) 
![https://david-dm.org/cironunes/generator-angular-next/](https://david-dm.org/cironunes/generator-angular-next.svg)

![Angular Yeoman](angular-yeoman.png)

This generator is simple enough to create small reusable components (directives) and powerful enough to complete AngularJS applications.

## Install

```
$ npm install -g generator-angular-next
```

## Getting started

* Scaffold the project:

  ```
  $ yo angular-next
  ```

* Then start the application:

  ```
  $ gulp serve
  ```

## Tasks

```serve``` Starts the web server

```
$ gulp serve
```

---


```tdd``` Starts Karma to watch your files and run the unit tests automatically

```
$ gulp tdd
```

## Subgenerators

```
$ yo angular-next:module [name]
$ yo angular-next:controller [module_name] [name]
$ yo angular-next:value [module_name] [name]
$ yo angular-next:factory [module_name] [name]
$ yo angular-next:directive [module_name] [name]
$ yo angular-next:filter [module_name] [name]
```

## Stack

- AngularJS
- Yeoman
- NodeJS
- Karma
- Jasmine
- Protractor
- Gulp

## Featues

- [x] Unit tests with Karma and Jasmine
- [x] E2E tests with Protractor
- [x] E2E tests with Protractor
- [ ] Authentication with OAuth or OpenID
- [ ] Authentication with OAuth or OpenID
- [ ] Generate Directives, Services, Controllers or Filters with the correspondent test files via Subgenerators
- [ ] Code coverage with Istanbul

## Motivation

The motivation behind this generator was the wish to DRY the proccess of configuring the necessary development environment for crafting small and modular components to be distributed on Bower or even entire applications.

## Team

[![Ciro Nunes](https://2.gravatar.com/avatar/ac4189b770a4dbc0078935a68fff6f5c)](https://github.com/cironunes) | 
--- |
[Ciro Nunes](https://github.com/cironunes) |

## License

MIT © Ciro Nunes
