'use strict';

angular.module('musicContractorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile/:id',
        controller: function($stateParams) {
          $stateParams.id;
        },
        template: '<profile></profile>',
      });
  });
