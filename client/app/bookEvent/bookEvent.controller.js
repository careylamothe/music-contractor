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

  addToRoster(musician) {
    musician.added = true;
    this.mailList.push(musician.id);
    console.log(this.mailList)
  }

  removeFromRoster(musician) {
    //iterate over array, find index, remove index
    //if id= the id, splice to remove
    this.mailList.pop(musician.id)
  }

  invite() {
    console.log('invite fired');
    this.$http.post('api/events/' + this.$stateParams.id + '/invite', {
      array: this.mailList,
      message: this.message
     })
    .then(() => {
      this.$state.go('event', {id: this.$stateParams.id })
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
