'use strict';

angular.module('musicContractorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile/:id',
        controller: function($stateParams) {
          console.log('zipppppppppy')
          $stateParams.id;
        },      
        template: '<profile></profile>',
      });
  });
