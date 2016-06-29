'use strict';

angular.module('musicContractorApp.auth', ['musicContractorApp.constants',
    'musicContractorApp.util', 'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
