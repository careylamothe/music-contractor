'use strict';
(function(){

class EventComponent {
  constructor($stateParams, $state) {
    this.message = 'Hello';
//create post function
    // redirects to event page for specified id
    // $state.go('event', { id: id});
  }
}

angular.module('musicContractorApp')
  .component('event', {
    templateUrl: 'app/event/event.html',
    controller: EventComponent
  });

})();
