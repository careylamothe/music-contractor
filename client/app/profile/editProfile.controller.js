'use strict';
(function(){

class EditProfileComponent {
  constructor($http) {
    this.message = 'Hello';
    this.$http = $http;
    this.alllPosts = [];
  }

  submit() {
    if (this.post) {
      console.log(this.post);
      this.$http.post('/api/musicians', {
        name: this.post.name,
        main: this.post.mainInstrument,
        image: this.post.imageURL,
        additionalInstruments: this.post.otherInstrumetns,
        bio: this.post.bio
      });
    };
  }
}

angular.module('musicContractorApp')
  .component('editProfile', {
    templateUrl: 'app/profile/editProfile.html',
    controller: EditProfileComponent
  });

})();
