'use strict';

describe('Component: bookEventComponent', function () {

  // load the controller's module
  beforeEach(module('musicContractorApp'));

  var bookEventComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    bookEventComponent = $componentController('bookEventComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
