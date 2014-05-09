/*global describe,beforeEach,it,expect*/

describe('header layout', function () {
  var scope, ctrl;

  beforeEach(module('MyApp.layout'));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('HeaderCtrl', { $scope: scope });
  }));

  it('should have two items by default', function() {
    scope.$digest();
    expect(scope.items.length).to.equal(2);
  });

});