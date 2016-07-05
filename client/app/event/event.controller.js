'use strict';
(function(){

class EventComponent {
  constructor($stateParams, $state) {
    this.message = 'Hello';
    this.$state = $state;

  submitEvent() {
    if (this.post) {
      console.log(this.post);
      this.$http.post('/api/events', {
        title: this.event.title,
        date: this.event.date,
        time: this.event.time,
        venue: this.event.venue,
        address: this.event.address,
        rehearsals: this.event.notes
      }).then(function () {
        $state.go('event', { id: id})
      });
    }
  }

  $onInit() {
    var currentId = $stateParams.id;

    this.$http.get('api/events')
    .then(function (response) {
      console.log(resoponse.data)
    })
  }

}

angular.module('musicContractorApp')
  .component('event', {
    templateUrl: 'app/event/event.html',
    controller: EventComponent
  });

})();
