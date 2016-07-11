'use strict';
(function(){

class bookEventComponent {
  constructor($http, $stateParams, $state) {
    this.message = '';
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.$http = $http;
    this.event = {};
    this.musicians = [];
    this.mailList = [];

  }

  addToRoster() {
    //add to musician_events here?
    // this.$http.post('api/events/:id/join/musician', {
    //   id: this.muscian.id
    // }).then(()=> {
    
        this.mailList.push(musician.id)
        console.log(mailList)
  }

  removeFromRoster() {
    //delete from musician_events this.$http.delete('api/')
    this.mailList.pop(musician.id)
  }

  invite() {
    console.log('invite fired');
    this.$http.post('api/events/:id/invite', {
      array: this.mailList,
      message: this.message
     })
    .then(() => {
      this.$state.go('event/:id', {id: id})
    })
  }

  $onInit() {
    var currentId = this.$stateParams.id;

    this.$http.get('api/events/' + currentId)
    .then((response) => {
      this.event = response.data;
    })

    this.$http.get('api/musicians')
    .then((response) => {
      this.musicians = response.data;
    })
  }

}

angular.module('musicContractorApp')
  .component('bookEvent', {
    templateUrl: 'app/bookEvent/bookEvent.html',
    controller: bookEventComponent,
    controllerAs: 'vm'
  });

})();
