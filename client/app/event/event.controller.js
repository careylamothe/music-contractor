'use strict';
(function(){

class EventComponent {
  constructor($stateParams) {
    this.message = 'Hello';
  }
}

angular.module('musicContractorApp')
  .component('event', {
    templateUrl: 'app/event/event.html',
    controller: EventComponent
  });

})();
