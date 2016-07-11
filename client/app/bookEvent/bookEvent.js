'use strict';

angular.module('musicContractorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('bookEvent', {
        url: '/event/book/:id',
        template: '<book-event></book-event>'
      });
  });
