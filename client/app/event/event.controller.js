'use strict';
(function(){

class EventComponent {
  constructor($stateParams, $state) {
    this.message = 'Hello';

  submitEvent() {
    if (this.post) {
      console.log(this.post);
      this.$http.post('/api/events', {
        title: this.post.title,
        date: this.post.date,
        time: this.post.time,
        venue: this.post.venue,
        address: this.post.address,
        rehearsals: this.post.notes
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
