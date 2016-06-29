'use strict';
(function(){

class ProfileComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('musicContractorApp')
  .component('profile', {
    templateUrl: 'app/profile/profile.html',
    controller: ProfileComponent
  });

})();
