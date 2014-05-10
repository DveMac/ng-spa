angular.module('app', [
    'ui.router',
    'app.layout',
    'app.home',
    'app.about'
])

    .config(function myAppConfig($locationProvider, $stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    })

    .run(function run() {

    });