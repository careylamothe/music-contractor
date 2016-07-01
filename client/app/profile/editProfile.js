'use strict';

angular.module('musicContractorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('editProfile', {
        url: '/profile/edit',
        template: '<edit-profile></edit-profile>'
      });
  });
