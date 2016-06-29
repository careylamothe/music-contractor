'use strict';

angular.module('musicContractorApp', ['musicContractorApp.auth', 'musicContractorApp.admin',
    'musicContractorApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router',
    'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
