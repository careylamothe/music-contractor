'use strict';

angular.module('musicContractorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile',
        template: '<profile></profile>'
      });
  });
