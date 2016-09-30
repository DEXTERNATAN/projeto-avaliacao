'use strict';

describe('Controller: DivisoesCtrl', function () {

  // load the controller's module
  beforeEach(module('prjAvalicao05App'));

  var DivisoesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DivisoesCtrl = $controller('DivisoesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
