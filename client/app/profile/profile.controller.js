'use strict';
(function(){

class ProfileComponent {
  constructor($http, $state, $stateParams, Auth) {
    this.message = 'Hello';
    this.$state = $state;
    this.$http = $http;
    this.$stateParams = $stateParams;
    this.Auth = Auth;
  }

  $onInit() {
    var currentId = this.$stateParams.id;

      this.$http.get('/api/musicians/' + currentId)
      .then(response => {
        this.musician = response.data;
      });

      this.$http.get('/api/musicians/' + currentId + '/join/events')
      .then(response => {
        this.events = response.data;
      })
    }

}

angular.module('musicContractorApp')
  .component('profile', {
    templateUrl: 'app/profile/profile.html',
    controller: ProfileComponent,
    controllerAs: 'vm'
  });

})();
