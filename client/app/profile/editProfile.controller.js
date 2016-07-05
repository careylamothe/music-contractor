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
        name: this.post.first,
        last: this.post.last,
        main: this.post.primary_inst_id,
        image: this.post.imageURL,
        additionalInstruments: this.post.adminNote,
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
