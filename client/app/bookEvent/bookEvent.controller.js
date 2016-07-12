'use strict';
(function(){

class bookEventComponent {
  constructor($http, $stateParams, $state) {
    this.message = '';
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.$http = $http;
    this.mailList = [];
    this.message = '';
  }

  addToRoster(musician) {
    musician.added = true;
    this.mailList.push(musician.id);
  }

  removeFromRoster(musician) {
    for (var i = 0; i < this.mailList.length; i++) {
      if (this.mailList[i] === musician.id) {
        this.mailList.splice([i], 1)
      }
    }
    musician.added = false;
  }

  invite() {
    this.$http.post('api/events/' + this.$stateParams.id + '/invite', {
      array: this.mailList,
      message: this.message
     })

    this.$http.get('api/events/' + this.$stateParams.id + '/musicians')
    .then((response) => {
      this.roster = response.data;
      this.message = '';
    }).then(() => {
      this.$state.go('events/', {id: this.$stateParams.id })
    })
  }

  removeProfile(musician) {
    this.$http.delete('')
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

    this.$http.get('api/events/' + this.$stateParams.id + '/musicians')
    .then((response) => {
      this.roster = response.data;
      this.message = '';
    }).then(() => {
      this.$state.go('events/', {id: this.$stateParams.id })
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
