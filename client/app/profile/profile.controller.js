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

      this.$http.get('/api/musicians/' + currentId + '/events')
      .then(response => {
        this.gigs = response.data;
      })
    }

    removeProfile() {
      this.$http.delete('api/musicians' + currentId + 'delete')
      .then(response => {
        this.musicians = response.data;
      }).then(() => {
        this.$state.go('event')
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
