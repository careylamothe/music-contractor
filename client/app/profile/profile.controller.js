'use strict';
(function(){

class ProfileComponent {
  constructor($http, Auth) {
    this.message = 'Hello';
    this.$http = $http;
    this.alllPosts = []
    console.log(Auth.getCurrentUser())
  }

  $onInit() {
    this.$http.get('/api/musicians')
      .then(response => {
        console.log(response.data);
        this.awesomeThings = response.data;
      });
  }
  //check for id in url, if no id then current user
//get current logged in users profile
}

angular.module('musicContractorApp')
  .component('profile', {
    templateUrl: 'app/profile/profile.html',
    controller: ProfileComponent
  });

})();
