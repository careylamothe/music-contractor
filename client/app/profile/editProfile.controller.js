'use strict';
(function(){

class EditProfileComponent {
  constructor($stateParams, $state, $http) {
    this.message = 'Hello';
    this.$state = $state;
    this.$http = $http;
  }

  submit() {
    if (this.musician) {
      this.$http.post('/api/musicians', {
        first: this.musician.first,
        last: this.musician.last,
        instrument: this.musician.instrument,
        imageURL: this.musician.imageURL,
        adminNote: this.musician.adminNote,
        bio: this.musician.bio
      }).then((result) => {
        this.$state.go('profile', {id: result.data.id})
      });
    };
  }
}

angular.module('musicContractorApp')
  .component('editProfile', {
    templateUrl: 'app/profile/editProfile.html',
    controller: EditProfileComponent,
    controllerAs: 'vm'
  });

})();
