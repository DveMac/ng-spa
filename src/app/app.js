angular.module('MyApp', [
  'templates-app',
  'templates-common',
  'angular-responsive',
  'ui.router',
  'MyApp.layout',
  'MyApp.home',
  'MyApp.about'
])

  .config(function myAppConfig($locationProvider, $stateProvider, $urlRouterProvider) {
//    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/home');
  })

  .run(function run() {
  })

  .controller('AppCtrl', function AppCtrl($scope, $location) {
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      if (angular.isDefined(toState.data.pageTitle)) {
        $scope.pageTitle = toState.data.pageTitle + ' | MyApp';
      }
    });
  });

