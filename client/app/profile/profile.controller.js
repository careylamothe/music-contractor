'use strict';
(function(){

class ProfileComponent {
  constructor($http, $state, $stateParams, Auth) {
    this.message = 'Hello';
    this.$state = $state;
    this.$http = $http;
    this.$stateParams = $stateParams;
    this.Auth = Auth;
    this.profile = {};
  }

  $onInit() {
    console.log('hello', this.$stateParams)
    var currentId = this.$stateParams.id;

      this.$http.get('/api/musicians/' + currentId)
      .then(response => {

        this.musician = response.data;
        console.log(this.musician)
      });

      //get events by musician id
    }


}

angular.module('musicContractorApp')
  .component('profile', {
    templateUrl: 'app/profile/profile.html',
    controller: ProfileComponent,
    controllerAs: 'vm'
  });

})();
