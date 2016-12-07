//MARK:-- Landing Page Controller

myApp.controller("LandingPageController", ["$scope", "$location", "$firebaseAuth", 'UserFactory',
    function($scope, $location, $firebaseAuth, UserFactory) {

        //make sure controller is loading
        console.log('LandingPageController Loaded')

        //build signIn()

        //auth functionality
        //change path if user != null








    }
]);



// $scope.signIn = UserFactory.signIn();

// var auth = $firebaseAuth();
// auth.$onAuthStateChanged(function(user){
//   console.log('user logged in ', user.email);
//
//   if(user != null){
//     $location.path('/home');
//   }
//
// })
