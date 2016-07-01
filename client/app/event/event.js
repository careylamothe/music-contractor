'use strict';

angular.module('musicContractorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('event', {
        url: '/event',
        template: '<event></event>'
      });
  });
