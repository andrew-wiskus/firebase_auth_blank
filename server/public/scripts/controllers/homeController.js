//MARK:-- User Home Page Controller

myApp.controller("HomeController", ["$scope", "$location", "$firebaseAuth", 'UserFactory',
    function($scope, $location, $firebaseAuth, UserFactory) {

        //make sure controller is loaded
        console.log('User Is Logged In: Home Controller Loaded');

        //create user scope

        //build signOut()

        //auth functionality
        //change path if user == null





    }
]);









// $scope.user;
// $scope.signOut = UserFactory.signOut();
//
// var auth = $firebaseAuth()
// auth.$onAuthStateChanged(function(user) {
//     if (user === null) {
//         $location.path('/welcome');
//     }
//     $scope.user = user;
// })
