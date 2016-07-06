'use strict';
(function(){

class EventComponent {
  constructor($stateParams, $state, $http) {
    this.message = 'Hello';
    this.$state = $state;
    this.events = [];
    this.$stateParams = $stateParams;
    this.$http = $http;
  }

  submitEvent() {
    console.log(this);
    if (this.event) {
      console.log(this.event);
      this.$http.post('/api/events', {
        title: this.event.title,
        date: this.event.date,
        time: this.event.time,
        venue: this.event.venue,
        address: this.event.address,
        rehearsals: this.event.notes
      }).then(() => {
        this.$state.go('event', {id: id})
      });
    }
  }


  $onInit() {
    var currentId = this.$stateParams.id;

    this.$http.get('api/events')
    .then((response) => {
      this.events.push(...response.data);
    })
  }

}

angular.module('musicContractorApp')
  .component('event', {
    templateUrl: 'app/event/event.html',
    controller: EventComponent,
    controllerAs: 'vm'
  });

})();
