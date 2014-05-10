angular.module('app.layout')
  .controller('HeaderCtrl', function HeaderCtrl($scope) {
    $scope.items = [
      { title: 'Home', state: 'home' },
      { title: 'About', state: 'about' }
    ];
  });

