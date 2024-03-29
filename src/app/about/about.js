angular.module('app.about')

    .config(function config($stateProvider) {
        $stateProvider.state('about', {
            url: '/about',
            views: {
                "main": {
                    controller: 'AboutCtrl',
                    templateUrl: 'app/about/about.tpl.html'
                }
            },
            data: { pageTitle: 'What is It?' }
        });
    });