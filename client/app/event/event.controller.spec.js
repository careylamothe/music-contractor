'use strict';

describe('Component: EventComponent', function () {

  // load the controller's module
  beforeEach(module('musicContractorApp'));

  var EventComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    EventComponent = $componentController('EventComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
