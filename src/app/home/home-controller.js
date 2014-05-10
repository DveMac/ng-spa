angular.module('app.home', [
    'app.common'
])
    .controller('HomeCtrl', function HomeCtrl($scope) {
        $scope.email = "tset@nothere.com";
    });