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
      console.log(this.musician);
      this.$http.post('/api/musicians', {
        name: this.musician.first,
        last: this.musician.last,
        name: this.musician.name,
        imageURL: this.musician.imageURL,
        adminNote: this.musician.adminNote,
        bio: this.musician.bio
      }).then(() => {
        this.$state.go('musician', {id: id})
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
