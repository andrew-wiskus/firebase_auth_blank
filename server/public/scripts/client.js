var myApp = angular.module("myApp", ["ngRoute", "firebase"]);
myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/welcome', {
            //no user logged in
            templateUrl: '/views/partials/landingPage.html',
            controller: 'LandingPageController'
        })
        .when('/home', {
            //user logged in
            templateUrl: '/views/partials/home.html',
            controller: 'HomeController'
        })
        .otherwise({
            redirectTo: 'welcome'
        });

}]);
