'use strict';
(function(){

class EventComponent {
  constructor($stateParams, $state, $http) {
    this.$state = $state;
    this.events = [];
    this.musicians = [];
    this.$stateParams = $stateParams;
    this.$http = $http;
  }

  submitEvent() {
    if (this.event) {
      this.$http.post('/api/events', {
        title: this.event.title,
        date: this.event.date,
        time: this.event.time,
        venue: this.event.venue,
        address: this.event.address,
        notes: this.event.notes
      }).then(() => {
        this.$state.go('event', {id: id})
      });
    }
  }

  $onInit() {
    // var currentId = this.$stateParams.id;

    this.$http.get('api/events')
    .then((response) => {
      this.events.push(...response.data);
    })

    this.$http.get('api/musicians')
    .then((response) => {
      this.musicians.push(...response.data);
    })
  }

  deleteEvent(anEvent) {
console.log(anEvent);
      this.$http.delete('/api/events/delete', + anEvent.id)
      .then((response) => {
        this.evens.push(...response.data);
      })
  }

}

angular.module('musicContractorApp')
  .component('event', {
    templateUrl: 'app/event/event.html',
    controller: EventComponent,
    controllerAs: 'vm',
    css: 'app/app.css'
  });

})();
