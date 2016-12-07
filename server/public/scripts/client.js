//MARK:-- App init + Angular Routes

var myApp = angular.module("myApp", ["ngRoute", "firebase"]);
myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/landingpage', {
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
            redirectTo: 'landingpage'
        });

}]);
